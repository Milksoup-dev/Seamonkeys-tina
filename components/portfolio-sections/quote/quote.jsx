import React from "react"
import styles from "./quote.module.css"
import { Fade } from "react-awesome-reveal"

export default function Quote({project, lang}){
    if(project.quote[lang]){
        return(
            <section className={`${styles.quote} py-6 px-4 is-relative has-text-white has-text-centered is-italic`}>
                <Fade direction="down" triggerOnce>
                    <div className="container py-6">
                        <div className="columns is-centered">
                            <div className="column is-half">
                                <p className={`subtitle is-5 py-5 has-text-white ${styles.paragraph}`}>{`"${project.quote[lang]}"`}</p>
                                <p className="has-text-weight-light">{project.quote.witness}</p>
                            </div>
                        </div>
                    </div>
                </Fade>
            </section>
        )
    } else return(null)
}