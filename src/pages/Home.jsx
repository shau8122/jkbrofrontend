
import { 
  HomeNav, 
  NavMenu, 
  CTASection, 
  DownLoadCTA, 
  PackersAndMoversSection, 
  InfoSection, 
  ShifitingProcess, 
  PricingSection, 
  Cities, 
  FAQs, 
  Footer } from '../components'

const Home = () => {

  return (
    <div className='overflow-x-hidden'>
        <HomeNav />
        <NavMenu />
        <CTASection />
        <DownLoadCTA />
        <PackersAndMoversSection />
        <InfoSection />
        <ShifitingProcess />
        <PricingSection />
        <Cities />
        <FAQs />
        <Footer />
    </div>
  )
}

export default Home