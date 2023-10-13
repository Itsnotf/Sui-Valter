import React from 'react'
import HeroOrganisasi from '../components/HeroOrganisasi'
import Navbar from '../components/navbar'
import Elcard from '../components/Elcard'
import Aos from 'aos'
import Footer from '../components/Footer'
import HmjCard from '../components/HmjCard'
import UkmCard from '../components/UkmCard'
import ContentOrg from '../components/ContentOrg'



function Organisasi() {
    Aos.init();
    return (
        <div className='bg-[#222831] w-full h-fit'>
            <Navbar />
            <HeroOrganisasi />
            <ContentOrg />
            {/* <Elcard />
            <HmjCard />
            <UkmCard />
            <Footer /> */}




        </div>
    )
}

export default Organisasi