import React, {FC, useEffect} from 'react';
import {useAppDispatch} from "../redux/store";
import {fetchAllPhotoCards, photoSelector} from "../redux/slices/photoCardsSlice";
import {useSelector} from "react-redux";
import PhotoCardByHome from "../components/PhotoCardByHome/PhotoCardByHome";

const HomeP: FC = () => {
    const dispatch = useAppDispatch()
    const {photoCards} = useSelector(photoSelector)
    useEffect(() => {
        dispatch(fetchAllPhotoCards())
    }, [photoCards,dispatch])

    return (
        <div className={'container'}>
            {photoCards.map(photo=><PhotoCardByHome photoCard={photo}/>)}
        </div>
    );
};

export default HomeP;