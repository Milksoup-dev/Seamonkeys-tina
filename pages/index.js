import { getPortfolioData } from '../lib/portfolio'
import { getContacts, getSocials, getMenu } from '../lib/partials'
import { getSection } from '../lib/home'
import Showreel from '../components/home-sections/showreel/showreel'
import ServicesSection from '../components/home-sections/services/services'
import PortfolioSection from '../components/home-sections/portfolio/portfolio'
import LanguagesSection from '../components/home-sections/services/languages'
import PartnersSection from '../components/home-sections/partners/partners'
import TeamSection from '../components/home-sections/team/team'
import { getMeta } from '../lib/home'
import Footer from '../components/footer/footer'
import Navbar from '../components/navbar/navbar'
import HowWeDoItSection from '../components/home-sections/how-we-do-it/how-we-do-it'
import Meta from '../components/meta/meta'
import { motion } from 'framer-motion'

export default function Home({portfolio, contacts, menu, socials, locale, languagesSection, partnersSection, teamSection, servicesSection, howWeDoItSection, meta}) {
  /* Filter the reel data from the portfolio */
  const showReelData = portfolio.filter(portfolio => portfolio.reel)
  return (
    <motion.div exit={{opacity: 0}}>  
        <Meta 
          meta={meta}
          lang={locale.locale}
        />
        <Navbar 
          data = {menu.menu}
          lang = {locale.locale}
        />
        <Showreel 
          data = {showReelData}
          lang = {locale.locale}
        />
        <ServicesSection 
          data = {servicesSection}
          lang = {locale.locale}
        />
        <LanguagesSection
          data = {languagesSection}
          lang = {locale.locale}
        />
        <HowWeDoItSection 
          data = {howWeDoItSection}
          lang = {locale.locale}
        />
        <PortfolioSection 
          portfolio = {portfolio}
          lang = {locale.locale}
        />
        <TeamSection 
          data = {teamSection}
          lang = {locale.locale}
        />
        <PartnersSection 
          data = {partnersSection}
          lang = {locale.locale}
        />

        <Footer 
          contacts = {contacts}
          socials = {socials}
          lang = {locale.locale}/>
        {/* <pre>{JSON.stringify(teamSection, null, 2) }</pre> */}
    </motion.div>
  )
}

export async function getStaticProps(locale){
  const portfolio = await getPortfolioData()
  const contacts = await getContacts()
  const menu = await getMenu()
  const socials = await getSocials()
  const languagesSection = await getSection('languages')
  const partnersSection = await getSection('partners')
  const teamSection = await getSection('team')
  const servicesSection = await getSection('services')
  const howWeDoItSection = await getSection('how_we_do_it')
  const meta = await getMeta()

  return{
    props: {
      portfolio,
      contacts,
      menu,
      socials,
      locale,
      languagesSection,
      partnersSection,
      teamSection,
      servicesSection,
      howWeDoItSection,
      meta,
    }
  }
}