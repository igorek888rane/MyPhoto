import React, {FC, useEffect, useState} from 'react';
import styles from './Profile.module.scss'
import ProfileHeader from "./ProfileHeader";
import {IPhotoCard} from "../../@types/types";
import PhotoCard from "./PhotoCard";


const Profile: FC = () => {
    const [photoCard, setPhotoCard] = useState<IPhotoCard[]>([])
    useEffect(() => {
        setPhotoCard([
            {
                id: 1, title: 'Igor',
                photoUrl: 'https://sun9-west.userapi.com/sun9-16/s/v1/ig2/9k1TNaY6fsW8pVKZeer92pEE8CtVHHaArYzyBtipHRDf2nlYFnI9qPJvvOCWu30jQEeRPjO955bWZvz7y-psz24Y.jpg?size=1620x2160&quality=96&type=album',
                count: 0
            },
            {
                id: 2, title: 'Masha',
                photoUrl: 'https://sun2.userapi.com/sun2-3/s/v1/if2/C6Kt4N2bQ-QpyPRKWGU1mPh2g-V7qtCSnfIYjsaY14ByOMt7Doc7WP5kCZgHS6LpfWYDTpPI-r_gdKe7yj-g8THt.jpg?size=1441x2160&quality=96&type=album',
                count: 0
            },
            {
                id: 3, title: 'Kit',
                photoUrl: 'https://sun9-north.userapi.com/sun9-86/s/v1/ig2/VmPcpUq3fVkl6oT6hPVy7On06WLoMURGoEaW0Xzmmvx5ErRUm0XgK9A0NbdSgba9RsOBQUyEfp7TZkvGzknKORev.jpg?size=1620x2160&quality=95&type=album',
                count: 0
            },
            {
                id: 4, title: 'Igor',
                photoUrl: 'https://sun9-west.userapi.com/sun9-16/s/v1/ig2/9k1TNaY6fsW8pVKZeer92pEE8CtVHHaArYzyBtipHRDf2nlYFnI9qPJvvOCWu30jQEeRPjO955bWZvz7y-psz24Y.jpg?size=1620x2160&quality=96&type=album',
                count: 0
            },
            {
                id: 5, title: 'Masha',
                photoUrl: 'https://sun2.userapi.com/sun2-3/s/v1/if2/C6Kt4N2bQ-QpyPRKWGU1mPh2g-V7qtCSnfIYjsaY14ByOMt7Doc7WP5kCZgHS6LpfWYDTpPI-r_gdKe7yj-g8THt.jpg?size=1441x2160&quality=96&type=album',
                count: 0
            },
            {
                id: 6, title: 'Kit',
                photoUrl: 'https://sun9-north.userapi.com/sun9-86/s/v1/ig2/VmPcpUq3fVkl6oT6hPVy7On06WLoMURGoEaW0Xzmmvx5ErRUm0XgK9A0NbdSgba9RsOBQUyEfp7TZkvGzknKORev.jpg?size=1620x2160&quality=95&type=album',
                count: 0
            }
        ])
    }, [])
    return (
        <>
            <ProfileHeader/>
            <div className={styles.photo_cards}>
                {photoCard.map(photo => <PhotoCard key={photo.id} photo={photo}/>)}
            </div>
        </>
    );
};

export default Profile;