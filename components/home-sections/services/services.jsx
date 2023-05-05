import React from 'react'
import styles from './services.module.css'
import Fade from 'react-reveal/Fade'


export default function ServicesSection({data, lang}) {
    return(
        <section id="services" className={`${styles.services}`}>
            {/* Cosa facciamo */}
            <div className="container">
                <div className="columns is-vcentered m-0">
                    <Fade left>
                        <div className="column p-0">
                            <img src={`https://res.cloudinary.com/seamonkeys/image/upload/f_auto,q_auto${data.image.split('upload')[1]}`} alt="services cover image" className={styles.cover}/>
                        </div>
                    </Fade>
                    <Fade right>
                        <div className={`column is-4-desktop is-offset-2-desktop pt-5 pb-6 ${styles.padding}`}>
                            <h2 className="title is-size-3-desktop is-size-4-mobile has-text-link">{data.section_title[lang]}</h2>
                            <div className="content has-text-white">
                                <ul>
                                    {data.services.map((item, index) =>
                                        <li key={index}>{item[lang]}</li>
                                    )}
                                </ul>
                            </div>
                        </div>
                    </Fade>
                </div>
            </div>
        </section>
    )
}