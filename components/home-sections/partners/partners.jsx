import React from 'react'
import styles from './partners.module.css'
import Fade from 'react-reveal/Fade'

export default function PartnersSection({data, lang}){
    return(
        <section id="partners" className={`${styles.partners} pt-4 pb-6 is-relative`}>
            <div className="py-6 px-5">
                <Fade top>
                    <h2 className="has-text-link title is-size-3-desktop is-size-4-mobile has-text-centered py-4">{data.section_title[lang]}</h2>
                </Fade>
                <Fade bottom>
                    <div className="is-flex is-justify-content-center is-align-items-center">
                        {data.brand.map(item => 
                            <div key={item.brand} className="mx-2">
                                <a href={item.link} rel="nofollow">
                                    <img src={`https://res.cloudinary.com/seamonkeys/image/upload/f_auto,q_auto${item.logo.split('upload')[1]}`} alt={item.brand} />
                                </a>
                            </div>
                        )}
                    </div>
                </Fade>
            </div>
        </section>
    )
}