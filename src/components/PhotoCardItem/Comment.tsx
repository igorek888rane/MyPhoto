import React, {FC, useEffect} from 'react';
import styles from './PhotoCardItem.module.scss';
import {fetchAllUsers, userSelector} from "../../redux/slices/userSlice";
import {useAppDispatch} from "../../redux/store";
import {IComment} from "../../@types/types";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";

type CommentProps = {
    comment: IComment
}


const Comment: FC<CommentProps> = ({comment}) => {
    const dispatch = useAppDispatch()
    const {users} = useSelector(userSelector)
    let user = users.find(u => u._id === comment?.user)

    useEffect(() => {
        dispatch(fetchAllUsers())
    }, [dispatch])

    return (
        <div className={styles.description_block}>
            <div className={styles.description_avatar}>
                <Link to={`/profile/${user?.userName}`}>
                    <img
                        src={user?.userAvatar ?
                            `${process.env.REACT_APP_SERVER_API}/uploads/userAvatar/${user?.userAvatar}`
                            : 'https://icons.iconarchive.com/icons/papirus-team/papirus-status/512/avatar-default-icon.png'}
                        alt=""/></Link>
            </div>
            <div className={styles.description_text}>
                <p><span>{user?.userName}</span>:{comment?.comment}</p>
            </div>
        </div>
    );
};

export default Comment;