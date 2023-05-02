import React from 'react'
import styles from './card-portfolio.module.css'
import Link from 'next/link'


export default function CardPortfolio(props) {
    return(
        <div className={`${styles.cardPortfolio} ${styles[props.classes]} is-flex is-flex-direction-column is-align-content-center is-justify-content-flex-end is-relative`}>
            <img src={props.image} className={styles.coverImage} alt={`Card cover image ${props.title}`}/>
            {props.languages.length > 0 ? 
                <div className={`is-flex is-justify-content-space-between ${styles.languages}`}>
                    <div className="mr-1 has-text-white">
                        {props.lang === 'it' ? 'Lingue:' : 'Languages:'}
                    </div>
                    <div className="has-text-right">
                        {props.languages.map(item => 
                            <span key={item} className="tag is-white mr-1">
                                {item}
                            </span>
                        )}
                    </div>
                </div> 
            : null}
            <span className={`${styles.cardTitle} title is-4 has-text-centered has-text-white is-uppercase is-bold`}>{props.title}</span>
            <div className="has-text-centered">
            <Link href={`/portfolio/${props.id}`} locale={props.lang}>
                <button className="button is-default is-link is-capitalized">
                    {props.lang === 'it' ? 'dettagli' : 'details'}
                </button>
            </Link>
            </div>
        </div>
    )
}

CardPortfolio.defaultProps = {
    image: '',
    title: 'watch dogs legion',
}