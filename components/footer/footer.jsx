import Reac from "react"
import styles from "./footer.module.css"

export default function Footer({ contacts, socials, lang }) {
    return (
        <footer id="footer" className={`${styles.footer} pt-6 is-relative`}>
            <div className="container px-4">
                <div className="columns is-vcentered">
                    <div className="column">
                        <h3 className="title is-size-3-desktop is-size-4-mobile has-text-white mb-3">{contacts.section_title[lang]}</h3>
                        <h4 className="subtitle is-size-5-desktop is-size-6-mobile has-text-white mt-5 mb-1">{contacts.company}</h4>
                        <ul className="has-text-white">
                            <li>{contacts.registered_office[lang]}</li>
                            <li>
                                {lang === 'it' ? 'P. IVA:' : 'VAT:'} {contacts.partita_iva} - {lang === 'it' ? ' Cap. Soc.' : 'Reg. Cap.'} {contacts.capitale_sociale} - {contacts.rea_mi}
                            </li>
                        </ul>
                    </div>
                    <div className="column has-text-right has-text-left-touch">
                        <h5 className="subtitle is-size-5-desktop is-size-6-mobile has-text-white mt-5 mb-1">{socials.section_title[lang]}</h5>
                        <p>
                            {socials.socials.map(item =>
                                <a href={item.action} rel="nofollow" className="mx-1" key={item.label}>
                                    <img src={`https://res.cloudinary.com/seamonkeys/image/upload/f_auto,q_auto${item.icon.split('upload')[1]}`}
                                        alt={item.label}
                                        width={24}
                                        height={24}
                                        className={styles.socialIcon} />
                                </a>
                            )}
                        </p>
                    </div>
                </div>
            </div>
            <div className={`${styles.footerCaption} p-5 mt-6`}>
                <div className="is-flex is-justify-content-center is-align-items-center has-text-white">
                    <div>2021 © Seamonkeys srl</div>
                    <span className="mx-3">|</span>
                    <a href={lang === 'en' ? "https://www.iubenda.com/privacy-policy/97264768/legal" : "https://www.iubenda.com/privacy-policy/60645257/legal"} target="_blank" title="Privacy Policy ">Privacy Policy</a>
                </div>
            </div>
        </footer>
    )
}