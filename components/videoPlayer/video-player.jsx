import React from "react"
import styles from "./video-player.module.css"
import ReactPlayer from "react-player"

export default function VideoPlayer({url}){
    return(
        <div className={styles.videoWrapper}>
            <div className={styles.videoContainer}>
                <ReactPlayer url={url} width="100%" height="100%" />
            </div>
        </div>
    )
}
