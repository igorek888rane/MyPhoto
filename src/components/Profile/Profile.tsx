import React, {FC, useEffect, useState} from 'react';
import styles from './Profile.module.scss'
import ProfileHeader from "./ProfileHeader";
import {IPhotoCard} from "../../@types/types";
import PhotoCard from "./PhotoCard";
import PhotoCardSkeleton from "./PhotoCardSkeleton";


const Profile: FC = () => {
    const [photoCard, setPhotoCard] = useState<IPhotoCard[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(false)
    useEffect(() => {
        setIsLoading(true)
        setPhotoCard([
            {
                id: 1, description: 'Igor',
                photoUrl: 'https://sun9-west.userapi.com/sun9-16/s/v1/ig2/9k1TNaY6fsW8pVKZeer92pEE8CtVHHaArYzyBtipHRDf2nlYFnI9qPJvvOCWu30jQEeRPjO955bWZvz7y-psz24Y.jpg?size=1620x2160&quality=96&type=album',
                likes: 0,
                comments:0
            },
            {
                id: 2, description: 'Masha',
                photoUrl: 'https://sun2.userapi.com/sun2-3/s/v1/if2/C6Kt4N2bQ-QpyPRKWGU1mPh2g-V7qtCSnfIYjsaY14ByOMt7Doc7WP5kCZgHS6LpfWYDTpPI-r_gdKe7yj-g8THt.jpg?size=1441x2160&quality=96&type=album',
                likes: 0,
                comments:0
            },
            {
                id: 3, description: 'Kit',
                photoUrl: 'https://sun9-north.userapi.com/sun9-86/s/v1/ig2/VmPcpUq3fVkl6oT6hPVy7On06WLoMURGoEaW0Xzmmvx5ErRUm0XgK9A0NbdSgba9RsOBQUyEfp7TZkvGzknKORev.jpg?size=1620x2160&quality=95&type=album',
                likes: 0,
                comments:0
            },

        ])
       setTimeout(()=>{
           setIsLoading(false)
       },2000)

    }, [])
    return (
        <>
            <ProfileHeader/>
            {photoCard.length
                ? <div className={styles.photo_cards}>
                    {isLoading?
                        [...new Array(3)].map((_,i)=><PhotoCardSkeleton key={i}/>)
                        :photoCard.map(photo => <PhotoCard key={photo.id} photo={photo}/>)}

                </div>
                : <div className={styles.not_found_block}>
                    <h1>Нет Публикаций</h1>
                </div>}
        </>
    );
};

export default Profile;


