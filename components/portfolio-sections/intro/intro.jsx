import React from "react"
import styles from "./intro.module.css"
import NavigationProject from "../navigation-project/navigation-project"
import { Fade } from "react-awesome-reveal"

export default function IntroSection({project, prev, next, lang}){
    return(
        <section className={`${styles.intro}`}>
            <Fade direction="down" triggerOnce>
                <div className={`${styles.coverContainer} container`}>
                    <img src={`https://res.cloudinary.com/seamonkeys/image/upload/f_auto,q_auto${project.media.cover.split('upload')[1]}`} alt={`Cover image - ${project.title_tag[lang]}`} className={styles.cover} />
                    {/* <img src={`https://res.cloudinary.com/milksoup/image/upload/q_1,f_auto${project.media.cover}`} alt={`Cover image - ${project.title_tag[lang]}`} className={styles.coverBg} /> */}
                </div>
                <NavigationProject 
                    next={next}
                    prev={prev}
                    project={project}
                    lang={lang}
                    title={true}
                />
            </Fade>
        </section>
    )
}