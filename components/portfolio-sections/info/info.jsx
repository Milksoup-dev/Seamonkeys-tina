import React from "react"
import styles from "./info.module.css"
import Client from "../../icons/client"
import Dubbing from "../../icons/dubbing"
import Registration from "../../icons/registration"
import Translate from "../../icons/translate"
import Voices from "../../icons/voices"
import Year from "../../icons/year"
import { Fade } from "react-awesome-reveal"

export default function Info({project, lang}){
    const labels = {
        client: {
            en: "Client",
            it: "Cliente"
        },
        year:{
            it: "Anno",
            en: "Year"
        },
        translations:{
            it: "Traduzioni",
            en: "Translations"
        },
        dubbing:{
            it: "Doppiaggio",
            en: "Dubbing"
        },
        dubbed_voices:{
            it: "Voci doppiate",
            en: "Dubbed voices"
        },
        hours_of_recording:{
            it: "Ore di registrazione",
            en: "Hours of recording"
        }
    }

    return(
        <section className={`${styles.info} py-6`}>
            <div className="container">
                <div className="columns">
                    <div className="column px-6">
                        <Fade direction="left" triggerOnce>
                            <ul>
                                {/* Client */}
                                <li className="is-flex is-align-content-center">
                                    <Client width={24} height={24} />
                                    <div className="ml-3">
                                        <div className="title is-5 has-text-white mb-2 ">{labels.client[lang]}</div>
                                        <div className="has-text-white-ter mb-6">
                                            {project.info.client ? project.info.client[lang] : null}
                                        </div>
                                    </div>
                                </li>
                                {/* Year */}
                                <li className="is-flex is-align-content-center">
                                    <Year width={24} height={24} />
                                    <div className="ml-3">
                                        <div className="title is-5 has-text-white mb-2">{labels.year[lang]}</div>
                                        <div className="has-text-white-ter mb-6">{project.info.period ? project.info.period[lang] : null}</div>
                                    </div>
                                </li>
                                {/* Translations */}
                                <li className="is-flex is-align-content-center">
                                    <Translate width={24} height={24} />
                                    <div className="ml-3">
                                        <div className="title is-5 has-text-white mb-2">{labels.translations[lang]}</div>
                                        <div className="has-text-white-ter">
                                            {project.info.translations ? project.info.translations[lang].map(item => <span key={item} className={styles.item}>{item}</span>) : null}
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </Fade>
                    </div>
                    <div className="column px-6">
                        <Fade direction="right" triggerOnce>
                            <ul>
                                {/* Dubbing */}
                                <li className="is-flex is-align-content-center">
                                    <Dubbing width={24} height={24} />
                                    <div className="ml-3">
                                        <div className="title is-5 has-text-white mb-2">{labels.dubbing[lang]}</div>
                                        <div className="has-text-white-ter mb-6">{project.info.dubbing ? project.info.dubbing[lang].map(item => <span key={item} className={styles.item}>{item}</span>) : null}</div>
                                    </div>
                                </li>
                                {/* Dubbing voices */}
                                <li className="is-flex is-align-content-center">
                                    <Voices width={24} height={24} />
                                    <div className="ml-3">
                                        <div className="title is-5 has-text-white mb-2">{labels.dubbed_voices[lang]}</div>
                                        <div className="has-text-white-ter mb-6">{project.info.dubbed_voices ? project.info.dubbed_voices[lang] : null}</div>
                                    </div>
                                </li>
                                {/* Hours of registration */}
                                <li className="is-flex is-align-content-center">
                                    <Registration width={24} height={24} />
                                    <div className="ml-3">
                                        <div className="title is-5 has-text-white mb-2">{labels.hours_of_recording[lang]}</div>
                                        <div className="has-text-white-ter">{project.info.registration_hours ? project.info.registration_hours[lang] : null}</div>
                                    </div>
                                </li>
                            </ul>
                        </Fade>
                    </div>
                </div>
            </div>
        </section>
    )
}