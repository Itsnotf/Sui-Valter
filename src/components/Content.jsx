import React from 'react'
import Card from './Card'
import Aos from 'aos'

function Content() {
    return (
        <main className='flex flex-col bg-[#233146] w-full md:max-w-full md:h-[1220px] h-[2300px]'>
            <header className='flex flex-col md:items-center items-start md:mx-[120px] mx-[28px] mt-[90px]'>
                <h1 className='text-[#eeee] md:text-[60px] text-[35px] md:text-center text-left font-bold' data-aos="fade-right">Goals <span className='text-[#00ADB5] '>
                    Sriwijaya Union</span> Information.</h1>
                <p className='text-[#eeee] md:text-[28px] text-[15px] font-medium text-left md:text-center' data-aos="fade-left">Kami memberikan wadah untuk mahasiswa berbagi gagasan, pendapatdan
                    proyek mereka melalui Informasi seputar dunia organisasi</p>
            </header>
            <section className='flex md:flex-row flex-col md:justify-evenly justify-center items-center flex-wrap gap-y-12 md:mx-[120px] mx-[28px] mt-[70px]'>
                <Card data-aos="fade-right" />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </section>
        </main>
    )
}

export default Content