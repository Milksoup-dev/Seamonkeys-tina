import React from "react"
import styles from "./how-we-do-it.module.css"
import Fade from 'react-reveal/Fade'

export default function HowWeDoItSection({data, lang}){
    return(
        <>
            <section className={`${styles.howWeDoIt} px-5 py-6`}>
                <div className="container mb-0">
                    <div className="columns is-vcentered">
                            <Fade left>
                                <div className={`column pt-6 has-text-white ${styles.columnLeft}`}>
                                    <h2 className="title is-size-3-desktop is-size-4-mobile has-text-link mb-5">{data.section_title[lang]}</h2>
                                    <h3 className="subtitle is-size-5-desktop is-size-6-mobile has-text-white mt-0 mb-3">{data.paragraph_1.title[lang]}</h3>
                                    <p className={styles.paragraph}>{data.paragraph_1.description[lang]}</p>
                                    <h3 className="subtitle is-size-5-desktop is-size-6-mobile has-text-link is-italic mt-3">{data.paragraph_1.subtitle[lang]}</h3>
                                </div>
                            </Fade>
                            <Fade right>
                                <div className="column is-half is-relative">      
                                        <img src={`https://res.cloudinary.com/milksoup/image/upload/f_auto,q_auto${data.paragraph_1.image}`} alt="how we do it - cover image" className={styles.cover}/>
                                </div>
                            </Fade>
                    </div>
                    <div className="columns is-vcentered">
                        <Fade left>
                            <div className="column is-half is-hidden-mobile is-relative">
                                <img src={`https://res.cloudinary.com/milksoup/image/upload/f_auto,q_auto${data.paragraph_2.image}`} alt="how we do it - cover image" className={styles.cover}/>
                            </div>
                        </Fade>
                        <Fade right>
                            <div className={`column pb-6 has-text-white ${styles.columnRight}`}>
                                <p className={styles.paragraph}>{data.paragraph_2.description[lang]}</p>
                                <a href={data.paragraph_2.button.action[lang]} className="button is-link mt-5">{data.paragraph_2.button.label[lang]}</a>
                            </div>
                        </Fade>
                    </div>
                </div>
            </section>
        </>
    )
}