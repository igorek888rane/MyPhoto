import React, {FC, useEffect} from 'react';
import {useAppDispatch} from "../redux/store";
import {fetchAllPhotoCards, fetchPhotoCardsSubscribe, photoSelector} from "../redux/slices/photoCardsSlice";
import {useSelector} from "react-redux";
import PhotoCardByHome from "../components/PhotoCardByHome/PhotoCardByHome";
import {authSelector} from "../redux/slices/authSlice";
import {commentSelector} from "../redux/slices/commentSlice";

const HomeP: FC = () => {
    const dispatch = useAppDispatch()
    const {photoCards} = useSelector(photoSelector)
    const {photoCardsSubscribe} = useSelector(photoSelector)
    const {data} = useSelector(authSelector)
    const {comments} = useSelector(commentSelector)
    useEffect(()=>{
       dispatch(fetchPhotoCardsSubscribe())
    },[data,comments,dispatch])
    useEffect(() => {
        dispatch(fetchAllPhotoCards())
    }, [data,comments,dispatch])

    return (
        <div className={'container'}>
            {photoCardsSubscribe.map(photo=><PhotoCardByHome key={photo._id} photoCard={photo}/>)}
            <h1 style={{textAlign:'center'}}>Подписки кончились</h1>
            {photoCards.map(photo=><PhotoCardByHome key={photo._id} photoCard={photo}/>)}
        </div>
    );
};

export default HomeP;


//