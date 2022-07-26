import React from "react"
import ContentLoader from "react-content-loader"
import styles from "./Profile.module.scss";


const PhotoCardSkeleton = () => (
    <div className={styles.photo_card}>
        <div className={styles.photo_skeleton}>
            <ContentLoader
                speed={3}
                max-width={600}
                viewBox="0 0 400 460"
                backgroundColor="#999999"
                foregroundColor="#ecebeb"
            >
                <rect x="0" y="0" rx="25" ry="25" width="400" height="400"/>
            </ContentLoader>
        </div>
    </div>
)

export default PhotoCardSkeleton

