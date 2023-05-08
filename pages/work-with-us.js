import { getWorkData } from "../lib/work-with-us"
import { getContacts, getSocials, getMenu } from '../lib/partials'
import Footer from '../components/footer/footer'
import Navbar from '../components/navbar/navbar'
import Positions from "../components/work-sections/positions/positions"
import { Fade } from "react-awesome-reveal"

export default function WorkWithUs({title, jobPositions, contacts, menu, socials, locale, cover, titlePositions}){
    return(
        <>
            <Navbar 
                data = {menu.menu}
                lang = {locale.locale}
            />
            <Fade direction="down" triggerOnce>
                <section className="intro">
                    <div className="cover-container">
                        <img src={`https://res.cloudinary.com/seamonkeys/image/upload${cover.split('upload')[1]}`} alt="cover work with us" className="cover" />
                    </div>
                    <div className={`py-4 px-5 has-text-white title is-size-4-touch is-size-3-desktop has-text-centered m-0`}>{titlePositions[locale.locale]}</div>
                </section>
            </Fade>
            <Positions 
                positions={jobPositions}
                lang = {locale.locale}
            />
            {/* <pre>{JSON.stringify(titlePositions, null, 2) }</pre> */}
            <Footer 
                contacts = {contacts}
                socials = {socials}
                lang = {locale.locale}
            />
            <style jsx>{`
                .intro{
                    background-color: #0D0D0D;
                }
                .cover-container{
                    height: 35vh;
                }
                .cover{
                    object-fit: cover;
                    object-position: top;
                    height: inherit;
                    width: 100%;
                }
            `}
            </style>
        </>
    )
}

export async function getStaticProps(locale){
    const workData = await getWorkData()
    const contacts = await getContacts()
    const menu = await getMenu()
    const socials = await getSocials()
    return {
        props: {
            title: workData.title_tag[locale.locale] || null,
            jobPositions: workData.job_positions || null,
            titlePositions: workData.title_positions || null,
            contacts,
            menu,
            socials,
            locale,
            cover: workData.cover || null
        }
    }
}