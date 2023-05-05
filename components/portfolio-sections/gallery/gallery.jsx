import React from "react"
import styles from "./gallery.module.css"
import VideoPlayer from "../../videoPlayer/video-player"
import Fade from 'react-reveal/Fade'

export default function Gallery({gallery, trailer, lang}){

    return(
        <section className={`${styles.gallery} px-5 py-6`}>
            <div className="container">
                <Fade bottom>
                    <div className="columns">
                        <div className="column">
                            <div className={styles.galleryWrapperSquare}>
                                <img src={`https://res.cloudinary.com/seamonkeys/image/upload/f_auto,q_auto${gallery[0].split('upload')[1]}`} alt={`Gallery image 1`} className={styles.media} />
                            </div>
                        </div>
                        <div className="column">
                            <div className="columns is-multiline">
                                <div className="column is-full">  
                                    {trailer[lang] ? 
                                        <VideoPlayer url={trailer[lang]} />
                                        :   <div className={styles.galleryWrapper}> 
                                                <img src={`https://res.cloudinary.com/seamonkeys/image/upload/f_auto,q_auto${gallery[3].split('upload')[1]}`} alt={`Gallery image 2`} className={styles.media}/>
                                            </div>
                                    }
                                </div>
                                <div className="column">
                                    <div className="columns is-multiline">
                                        <div className="column">
                                            <div className={styles.galleryWrapper}>
                                                <img src={`https://res.cloudinary.com/seamonkeys/image/upload/f_auto,q_auto${gallery[1].split('upload')[1]}`} alt={`Gallery image 3`} className={styles.media}/>
                                            </div>
                                        </div>
                                        <div className="column">
                                            <div className={styles.galleryWrapper}>
                                                <img src={`https://res.cloudinary.com/seamonkeys/image/upload/f_auto,q_auto${gallery[2].split('upload')[1]}`} alt={`Gallery image 4`} className={styles.media}/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Fade>
            </div>
        </section>
    )
}