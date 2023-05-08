import Reac from "react"
import Link from "next/link"
import styles from "./team.module.css"
import { Fade } from "react-awesome-reveal"
import Logo from "../../icons/logo"

export default function TeamSection({data, lang}){
    return(
        <section id="about-us" className={`${styles.team} py-6 is-relative`}>
            <div className="container py-6 px-5">
                <div className={`columns is-vcentered ${styles.reverseColumns}`}>
                    <div className="column is-half">
                        <Fade direction="left" triggerOnce>
                            <h2 className="title is-size-3-desktop is-size-4-mobile has-text-link mb-3 pt-2">{data.section_title[lang]}</h2>
                            <p className="has-text-white">{data.description[lang]}</p>
                            <Link href="/work-with-us" locale={lang} legacyBehavior>
                                <a className="button is-link mt-5">{data.button.label[lang]}</a>
                            </Link>
                        </Fade>
                    </div>
                    <div className="column is-5 is-offset-1 has-text-centered">
                        <Fade direction="right" triggerOnce>
                            <div>
                                <div className="mb-5 is-hidden-mobile">
                                    <Logo fill="white" width={250}/>
                                </div>
                                <ul className="is-flex is-flex-wrap-wrap">
                                    {data.members.map(item => 
                                        <li key={item.name} className="mr-2 has-tooltip-bottom has-tooltip-link has-tooltip-arrow" data-tooltip={`${item.name}\n${item.qualification}`}>
                                            <img src={`https://res.cloudinary.com/seamonkeys/image/upload/f_auto,q_auto${item.picture.split('upload')[1]}`} alt={item.name} width={64} height={64} className={styles.teamImage} />
                                        </li>    
                                    )}
                                </ul>
                            </div>
                        </Fade>
                    </div>
                </div>
            </div>
        </section>
    )
}