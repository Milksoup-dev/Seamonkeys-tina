import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Keyboard } from 'swiper';
import MediaQuery from 'react-responsive'
import styles from './portfolio.module.css'

import CardPortfolio from '../../card-portfolio/card-portfolio'
import 'swiper/css';

/* icons import */
import Prev from '../../icons/prev';
import Next from '../../icons/next';

export default function PortfolioSection({portfolio, lang}) {
    return(
        <section id="portfolio" className={`${styles.portfolioSecion} pt-6`}>
            <h2 className="has-text-link title is-size-3-desktop is-size-4-mobile has-text-centered pb-4 pt-6">Portfolio</h2>
            <div className="pb-6">
                <Swiper
                    modules={[Navigation, Keyboard]}
                    spaceBetween={20}
                    slidesPerView='auto'
                    centeredSlides={true}
                    navigation={{
                        prevEl: '.prev',
                        nextEl: '.next',
                    }}
                    loop={true} 
                    keyboard={{"enabled": true}}
                    /* onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)} */
                    >
                    {/* Fare il map per per tutti i progetti */}
                    {portfolio.map((item) => 
                        <SwiperSlide className={styles.slide} key={item.id}>
                            <CardPortfolio 
                                title={item.project_name} 
                                image={`https://res.cloudinary.com/seamonkeys/image/upload/f_auto,q_auto${item.media.card_image.normal.split('upload')[1]}`}
                                id={item.id}
                                lang={lang}
                                languages={item.info.iso_codes}
                                classes='drag'/>
                        </SwiperSlide>
                    )}
                </Swiper>
                <div className="is-flex p-5 is-justify-content-center">
                    <a className="prev mr-1">
                            <Prev width={28} height={28} fill='#fff'/>
                    </a>
                    <a className="next ml-1">
                            <Next width={28} height={28} fill='#fff'/>
                    </a>
                </div>
            </div>
            <style jsx>{`
                .swiper-slide{
                    width: auto;
                }
            `}</style>
        </section>
    )
}