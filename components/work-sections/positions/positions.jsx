import React from "react"
import styles from "./positions.module.css"
import Dubbing from "../../icons/dubbing"
import { Fade } from "react-awesome-reveal"

export default function Positions({positions, lang}){
    const jobPositions = positions.filter(item => item.lang === lang)
    if(jobPositions){
        return(
            <>
                {jobPositions.map((item, index) =>
                    <section key={index} className={`py-6 px-4 ${styles.positions}`}>
                        <div className="container">
                            <div className={`columns is-vcentered ${!(index % 2 == 0) ? styles.reverseColumns : ''} ${styles.columns}`}>
                                    <div className="column">
                                        <Fade direction={index % 2 == 0 ? "left" : "right"} triggerOnce>
                                            <div>
                                                <h2 className="title is-size-3-desktop  is-size-5-mobile has-text-white mb-3">{item.title}</h2>
                                                <p className="has-text-white-ter">{item.description}</p>
                                                <a href={item.button.action} className="button is-link mt-5">{item.button.label}</a>
                                            </div>
                                        </Fade>
                                    </div>
                                <div className="column has-text-centered is-hidden-touch">
                                    <Fade direction={index % 2 == 0 ? "left" : "right"} triggerOnce>
                                        <img src={`https://res.cloudinary.com/seamonkeys/image/upload/f_auto,q_auto,c_scale,h_150${item.icon.split('upload')[1]}`} alt={`${item.title}-icon`} />
                                    </Fade>
                                </div>
                            </div>
                        </div>
                    </section>
                )}
            </>
        )
    }else{
        return(
            <div>Attualmente non ci sono posizioni aperte</div>
        )
    }
}