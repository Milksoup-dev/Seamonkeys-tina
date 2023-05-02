import { getPortfolioIds, getProject, getPrev, getNext } from "../../lib/portfolio"
import { getContacts, getSocials, getMenu } from '../../lib/partials'
import Navbar from '../../components/navbar/navbar'
import Footer from "../../components/footer/footer"
import IntroSection from "../../components/portfolio-sections/intro/intro"
import Quote from "../../components/portfolio-sections/quote/quote"
import Info from "../../components/portfolio-sections/info/info"
import NavigationProject from "../../components/portfolio-sections/navigation-project/navigation-project"
import Gallery from "../../components/portfolio-sections/gallery/gallery"
import Meta from "../../components/meta/meta"
import { motion } from 'framer-motion'


export default function Project({project, next, prev, locale, contacts, menu, socials}){
    const meta = {
        title: project.title_tag,
        description: project.description_tag,
        image: project.image
    }
    return(
        <motion.div exit={{opacity: 0}}>
            <Meta 
                meta={meta}
                lang={locale}
            />
            <Navbar 
                data = {menu.menu}
                lang = {locale}
            />
            <IntroSection 
                project={project} 
                prev={prev}
                next={next}
                lang = {locale}
            />
            <Info 
                project={project}
                lang={locale}
            />
            <Gallery 
                gallery={project.media.gallery}
                trailer={project.media.trailer}
                lang={locale}
            />
            <Quote 
                project={project}
                lang={locale}
            />
            <NavigationProject 
                project={project} 
                prev={prev}
                next={next}
                lang = {locale}
                title={false}
            />
            {/* <pre>{JSON.stringify(project, null, 2) }</pre><br/>            
            <pre>{JSON.stringify(prev, null, 2) }</pre><br/>
            <pre>{JSON.stringify(next, null, 2) }</pre>
            <p>{locale}</p> */}
            <Footer 
                contacts = {contacts}
                socials = {socials}
                lang = {locale}
            />
        </motion.div>
    )
}

export async function getStaticPaths(){
    const pathsIt = await getPortfolioIds('it')
    const pathsEn = await getPortfolioIds('en')
    const paths = [...pathsIt, ...pathsEn]
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({params, locale}){
    const project = await getProject(params.id)
    const prev = await getPrev(params.id)
    const next = await getNext(params.id)
    const contacts = await getContacts()
    const menu = await getMenu()
    const socials = await getSocials()
    /* const meta = getMeta(params.id) */
    return {
        props: {
            project,
            next,
            prev,
            locale,
            contacts,
            menu,
            socials
        }
    }
}