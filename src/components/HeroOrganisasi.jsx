import React from 'react'
import BgHero from '../assets/BgHeroOrg.png'
import Aos from 'aos'



function HeroOrganisasi() {
    AOS.init({
        duration: 2000,
    });
    return (
        <main className='w-full md:h-[650px] h-[415px] min-w-[320px] flex flex-col md:mx-0 px-[28px] md:bg-[#222831] bg-[#00ADB5]'>
            <header className='flex  md:justify-center text-[#eeee] md:text-[90px] text-[40px] font-semibold md:mt-[120px] mt-[72px] z-10 md:animate-bounce'>
                <h1>Organisasi Mahasiswa.</h1>
            </header>
            <section className='flex justify-center md:text-[28px] text-[15px] md:mt-[100px] md:mx-[206px] text-[#eeee] md:w-auto min-w-[264px] w-[70%] font-medium md:text-center text-left z-10'>
                <p><span className='font-bold'>Politeknik Negeri Sriwijaya</span> memiliki lebih dari 20 Organisasi
                    Mahasiswa yang aktif dalam bidangnya masing masing, <span className='font-bold'>Organisasi Mahasiswa </span>
                    terdiri dari <span className='font-bold'>Eksekutif dan Legislatif serta HMJ, UKM dan Komunitas</span>.</p>
            </section>
            <div className='md:absolute w-full top-[137px] md:-ml-7 h-full'>
                <img src={BgHero} alt="" className='bg-cover w-[1550px] hidden items-end md:flex  ' />
            </div>

        </main>
    )
}

export default HeroOrganisasi