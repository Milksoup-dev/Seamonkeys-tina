import React from 'react'
import styles from './showreel.module.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, EffectFade, Autoplay } from 'swiper'
import 'swiper/css';
import "swiper/css/effect-fade"
import CardPortfolio from '../../card-portfolio/card-portfolio'
import Link from 'next/link'
import Fade from 'react-reveal/Fade'
import MouseAnimated from '../../icons/mouse-animated'
import Lottie from 'react-lottie'
import * as animationData from '../../icons/mouse.json'


/* icons import */
import Prev from '../../icons/prev';
import Next from '../../icons/next';

export default function Showreel({data, lang}){
    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: animationData,
    }
    const sortReelData = [...data].sort((a,b)=>(a.reel_order > b.reel_order) ? 1 : -1)
    return(
        <section id="showreel" className={styles.showreel}>
            <Swiper
                modules={[Navigation, EffectFade, Autoplay]}
                spaceBetween={0}
                slidesPerView='auto'
                centeredSlides={true}
                navigation={{
                    prevEl: '.prev-sr',
                    nextEl: '.next-sr',
                }}
                loop={true} 
                effect={'fade'}
                autoplay={{ delay: 8000, disableOnInteraction: false }}
                allowTouchMove={false}
                /* onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)} */
                >
                {/* Fare il map per per tutti i progetti */}
                {sortReelData.map((item) => 
                    <SwiperSlide key={item.id}>
                        <div className={styles.slide}>
                            <video autoPlay={true} loop={true} className={styles.video} muted playsInline={true} disablePictureInPicture={true} poster={`https://res.cloudinary.com/milksoup/image/upload/f_auto,q_auto${item.media.cover}`}>
                                <source src={`https://res.cloudinary.com/milksoup/video/upload/f_auto,q_auto${item.media.video_reel}`}></source>
                                Your browser doesn't support HTML5 video.
                            </video>
                            {/* Mobile */}
                            <Fade top>
                            <div className={`${styles.introMobile} p-5 is-hidden-desktop`}>
                                <div className={`has-text-centered is-flex is-flex-direction-column is-justify-content-center is-align-items-center is-align-content-center`}>
                                    <h1 className="title is-4 has-text-white has-text-centered mb-3 mt-6 is-uppercase">{item.project_name}</h1>
                                    <div className={`${styles.divider} mb-1`}></div>
                                    {item.quote[lang] &&
                                        <p className={`${styles.quote} has-text-white subtitle is-6 is-italic my-3`}>{item.quote[lang]}</p> 
                                    }
                                    <p className="has-text-white subtitle is-6 is-italic has-text-weight-light">{item.quote.witness}</p>
                                    <Link href={`/portfolio/${item.id}`} locale={lang}>
                                        <button className="button is-link is-capitalized  mt-3">
                                            {lang === 'it' ? 'dettagli' : 'details'}
                                        </button>
                                    </Link>
                                </div>
                            </div>
                            </Fade>
                            <Fade bottom>
                                <div className={`is-flex is-justify-content-center is-hidden-desktop p-3`}>
                                    <a className="prev-sr mr-1">
                                            <Prev width={24} height={24} fill='#fff'/>
                                    </a>
                                    <a className="next-sr ml-1">
                                            <Next width={24} height={24} fill='#fff'/>
                                    </a>
                                </div>
                            </Fade>
                            {/* Desktop */}
                            <div className={`${styles.intro} container is-hidden-touch py-6`}>
                                <div className={`columns is-vcentered has-text-centered-touch is-flex`}>
                                    <Fade left>
                                        <div className={`column is-flex is-flex-direction-column is-justify-content-space-between`}>
                                            <div>
                                                {item.quote[lang] &&
                                                    <p className={`${styles.quote} has-text-white subtitle is-4 is-italic my-3`}>{item.quote[lang]}</p>
                                                }
                                                <p className="has-text-white subtitle is-4 is-italic has-text-weight-light">{item.quote.witness}</p>
                                                {/* <MouseAnimated fill="white" width={32} height={32}/> */}
                                            </div>
                                        </div>
                                    </Fade>
                                    <div className={styles.mouseIcon}>
                                        <Lottie options={defaultOptions}
                                            height={32}
                                            width={32}/>
                                    </div>
                                    <Fade right>
                                        <div className="column is-flex is-flex-direction-column is-align-items-center is-hidden-touch">
                                            <CardPortfolio 
                                                title={item.project_name} 
                                                image={`https://res.cloudinary.com/milksoup/image/upload/f_auto,q_auto${item.media.card_image.normal}`}
                                                id={item.id}
                                                lang={lang}
                                                languages=''
                                                classes=''/>
                                            <div className="is-flex p-5 is-justify-content-center">
                                                    <a className="prev-sr mr-1">
                                                            <Prev width={28} height={28} fill='#fff'/>
                                                    </a>
                                                    <a className="next-sr ml-1">
                                                            <Next width={28} height={28} fill='#fff'/>
                                                    </a>
                                            </div>
                                        </div>
                                    </Fade>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                )}
            </Swiper>
        </section>
    )
}
