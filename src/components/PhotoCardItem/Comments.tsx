import React, {ChangeEvent, FC, useEffect, useState} from 'react';
import styles from "./PhotoCardItem.module.scss";
import {Link} from "react-router-dom";
import {HeaderAndCommentsProps} from "../../@types/PropsType";
import {useAppDispatch} from "../../redux/store";
import {addLike, likeFinder} from '../../utils/like';
import {useSelector} from "react-redux";
import {commentSelector, fetchComments, createComment} from "../../redux/slices/commentSlice";
import Comment from "./Comment";

const Comments: FC<HeaderAndCommentsProps> = ({photoCard, data, user, back, setBack}) => {
    const dispatch = useAppDispatch()
    const likeFind = likeFinder(data, photoCard)
    const {comments} = useSelector(commentSelector)
    const [text, setText] = useState<string>('')
    const commentsByPhoto = comments.filter(com=>com.photo===photoCard?._id)

    useEffect(() => {
        dispatch(fetchComments())
    }, [])

    const addComment = async () => {
        const params = {photo: String(photoCard?._id), comment: text}
        await dispatch(createComment(params))
        setText('')
    }
    return (
        <div className={styles.comments_block}>
            <div className={styles.comments}>

                {photoCard?.description && <div className={styles.description_block}>
                    <div className={styles.description_avatar}>
                        <Link to={`/profile/${user?.userName}`}>
                            <img
                                src={user?.userAvatar ?
                                    `${process.env.REACT_APP_SERVER_API}/uploads/userAvatar/${user?.userAvatar}`
                                    : 'https://icons.iconarchive.com/icons/papirus-team/papirus-status/512/avatar-default-icon.png'}
                                alt=""/></Link>
                    </div>
                    <div className={styles.description_text}>
                        <p><span>{user?.userName}</span>:{photoCard?.description}</p>
                    </div>
                </div>}
                {
                    commentsByPhoto.length > 0 && commentsByPhoto.map(com => <Comment key={com?._id} comment={com}/>)
                }
            </div>

            {back ? <div onClick={() => setBack(!back)} className={styles.back}><span>{'<-'}</span></div>
                : <div className={styles.like}>

                    <div className={likeFind ? styles.icon_red : styles.icon}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg">
                            <g id="info"/>
                            <g id="icons">
                                <path
                                    onClick={() => likeFind ? addLike(-1, false, photoCard, dispatch) : addLike(1, true, photoCard, dispatch)}
                                    d="M22.2,4.1c2.7,2.7,2.4,6.9-0.4,9.5l-8.4,7.9c-0.8,0.7-2.1,0.7-2.9,0l-8.4-7.9c-2.7-2.6-3-6.8-0.4-9.5
                                  C4.6,1.4,9.2,1.3,12,4C14.8,1.3,19.4,1.4,22.2,4.1z"
                                    id="like"/>
                            </g>
                        </svg>
                    </div>
                    <div className={styles.count}>
                        <span> {photoCard?.likes}</span>
                    </div>
                </div>}
            <div className={styles.block_bottom}>

                <div className={styles.text}>

                    <div>
                        <textarea
                            value={text}
                            onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setText(e.target.value)}
                            placeholder={'Введите коментарий '}/>
                    </div>
                    <div className={styles.send} onClick={addComment}>
                        <svg height="18px" version="1.1" viewBox="0 0 23 18" width="23px"
                             xmlns="http://www.w3.org/2000/svg"
                        ><title/>
                            <desc/>
                            <defs/>
                            <g fill="none" fillRule="evenodd" id="Page-1" stroke="none" strokeWidth="1">
                                <g fill="#000000" id="Core" transform="translate(-421.000000, -381.000000)">
                                    <g id="send" transform="translate(421.500000, 381.000000)">
                                        <path d="M0,18 L21,9 L0,0 L0,7 L15,9 L0,11 L0,18 Z" id="Shape"/>
                                    </g>
                                </g>
                            </g>
                        </svg>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Comments;