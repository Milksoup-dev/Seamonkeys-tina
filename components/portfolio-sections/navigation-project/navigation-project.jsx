import React from "react"
import styles from "./navigation-project.module.css"
import Link from "next/link"
import ArrowLeft from "../../icons/arrow-left"
import ArrowRight from "../../icons/arrow-right"

export default function NavigationProject({prev, next, project, lang, title}){
    return(
        <div className={styles.navigation}>
            <div className="container">
                <div className={`is-flex is-justify-content-space-between is-align-items-stretch ${styles.navigationProject}`}>
                        {/* Prev button */}
                        <div className={`is-flex is-justify-content-space-between is-align-items-stretch ${styles.prevNext} ${prev.title_tag ? '' : styles.hide}`}>
                            { prev.id ? 
                                <Link href={prev.id} locale={lang}>
                                    <div className={`has-text-grey-lighter px-5 py-4 is-flex is-justify-content-center is-align-items-center ${styles.link}`}>
                                        <ArrowLeft width={24} height={24} />
                                        <span className="ml-2 is-hidden-touch">{prev.project_name ? prev.project_name : null}</span>
                                    </div>
                                </Link> : null
                            }
                        </div>
                        {/* Title project */}
                        {title ? 
                            <div className={`py-4 px-5 has-text-white is-flex is-justify-content-center is-align-items-center title is-size-6-touch is-size-5-desktop m-0 has-text-centered`}>{project.project_name}</div>
                        : null}
                        {/* Next button */}
                        <div className={`is-flex is-justify-content-space-between is-align-items-stretch ${styles.prevNext} ${next.title_tag ? '' : styles.hide}`}>
                            {next.id ?
                                <Link href={next.id} locale={lang}>
                                    <div className={`has-text-grey-lighter px-5 py-4 is-flex is-justify-content-center is-align-items-center ${styles.link}`}>
                                        <span className="mr-2 is-hidden-touch">{next.project_name ? next.project_name : null}</span>
                                        <ArrowRight width={24} height={24} />
                                    </div>
                                </Link> : null
                            }
                        </div>
                </div>
            </div>
        </div>
    )
}