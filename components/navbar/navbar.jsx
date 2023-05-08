import React, {useState} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import WorldLang from '../icons/world-lang'
import MenuIcon from '../icons/menu'
import styles from './navbar.module.css'
import { Fade } from "react-awesome-reveal"


export default function Navbar({data, lang}) {
    const router = useRouter()
    const [menu, setMenu] = useState(false)
    return (
        <>
            <nav className={`${styles.smNavbar} has-background-white`} role="navigation" aria-label="main navigation">
                <div className={`${styles.smNavbarContainer} container`}>
                    <a className="sm-navbar-logo" href="/">
                        <span className="is-hidden-touch">
                            <Image src="/logo.svg" alt="Seamonkey Logo" width={198} height={60} />
                        </span>
                        <span className="is-hidden-desktop">
                            <Image src="/logo.svg" alt="Seamonkey Logo" width={154} height={40} />
                        </span>
                    </a>
                    {/* Desktop contents */}
                    <div className="is-flex is-hidden-touch">
                        <ul className={`${styles.smNavbarMenu} is-flex mr-3`}>
                            { data.map(item =>
                                <li key={item.item} className="px-1 mr-2">
                                    {item.anchor 
                                        ? <a href={`/${item.action[lang]}`} className="has-text-black">{item.label[lang]}</a> 
                                        : <Link href={item.action[lang]} locale={lang} legacyBehavior><a className="has-text-black">{item.label[lang]}</a></Link>
                                    }
                                </li>
                            )}
                        </ul>
                        <ul className="is-flex is-align-content-center ml-4">
                            <li className="mr-1"><WorldLang width={16} height={16}/></li>
                            <li>
                                <Link href={{pathname: router.pathname, query: router.query}} locale="it" legacyBehavior>
                                    <a className={`${router.locale != "it" ? "has-text-black" : ""}`}>IT</a>
                                </Link>
                            </li>
                            <li className="px-2">|</li>
                            <li>
                                <Link href={{pathname: router.pathname, query: router.query}} locale="en" legacyBehavior>
                                    <a className={`${router.locale != "en" ? "has-text-black" : ""}`}>EN</a>
                                </Link>
                            </li>
                        </ul> 
                    </div>
                    {/* Mobile content */}
                    <div className="ml-3 is-hidden-desktop" onClick={() => setMenu(!menu)}>
                        <MenuIcon width={24} height={24}/>
                    </div>
                </div>
            </nav>
            <div className={`${styles.menuContainer} ${menu == false ? 'is-hidden' : styles.menuActive}`} >
                <div className={`is-flex is-flex-direction-column is-justify-content-center is-align-items-center has-text-centered p-5 ${styles.menuMobile}`}>
                    <Fade>
                        {/* Lang switch */}
                        <ul className="is-flex is-align-content-center mb-5">
                            <li className="mr-1"><WorldLang width={16} height={16} fill="white"/></li>
                            <li onClick={() => setMenu(!menu)}>
                                <Link href={{pathname: router.pathname, query: router.query}} locale="it" legacyBehavior>
                                    <a className={`${router.locale != "it" ? "has-text-white" : ""}`}>IT</a>
                                </Link>
                            </li>
                            <li className="px-2">|</li>
                            <li onClick={() => setMenu(!menu)}>
                                <Link href={{pathname: router.pathname, query: router.query}} locale="en" legacyBehavior>
                                    <a className={`${router.locale != "en" ? "has-text-white" : ""}`}>EN</a>
                                </Link>
                            </li>
                        </ul> 
                        <ul>
                            { data.map(item =>
                                <li key={item.item} className="px-4 py-2" onClick={() => setMenu(!menu)}>
                                    {item.anchor 
                                        ? <a href={`/${item.action[lang]}`} className="has-text-white title is-4">{item.label[lang]}</a> 
                                        : <Link href={item.action[lang]} locale={lang} legacyBehavior><a className="has-text-white title is-4">{item.label[lang]}</a></Link>
                                    }
                                </li>
                            )}
                        </ul>
                    </Fade>
                </div>
            </div>
        </>
    )
}