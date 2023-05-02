import React from "react"
import styles from './languages.module.css'
import Fade from 'react-reveal/Fade'

export default function LanguagesSection({data, lang}){
    const languages = data.languages
    const numberOfLanguages = languages.length
    const numberOfLanguagesPerColumn = Math.round(languages.length / 2)
    return(
        <section id="languages" className={`${styles.languages} py-6 is-relative`}>
            <div className="container py-4 px-5">
                <Fade bottom>
                    <div className="columns is-vcentered">
                        <div className="column is-two-fifths">
                            <h3 className="title is-size-3-desktop is-size-4-mobile has-text-link mb-3">{data.section_title[lang]}</h3>
                            <p className="has-text-white">{data.description[lang]}</p>
                            <a href={data.button.action[lang]} className="button is-link mt-5">{data.button.label[lang]}</a>
                        </div>
                        <div className="column has-text-white is-offset-one-quarter">
                            <div className="columns is-mobile">
                                <div className="column content">
                                    {languages.slice(0, numberOfLanguagesPerColumn).map(item => <ul key={item.title}>
                                        <li>
                                            <div className={styles.titleLang}>{item.lang[lang]}</div>
                                            <div className="has-text-grey-lighter">{item.label[lang]}</div>
                                        </li>
                                    </ul>)}
                                </div>
                                <div className="column content">
                                    {languages.slice(numberOfLanguagesPerColumn, numberOfLanguages).map(item => 
                                        <ul key={item.title}>
                                            <li>
                                                <div className={styles.titleLang}>{item.lang[lang]}</div>
                                                <div className="has-text-grey-lighter">{item.label[lang]}</div>
                                            </li>
                                        </ul>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </Fade>
            </div>
        </section>
    )
}