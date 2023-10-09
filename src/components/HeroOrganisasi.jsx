import React from 'react'
import Hero2 from '../assets/Hero2.png'
import Aos from 'aos'
import Hero3 from '../assets/Hero3.png'
import Hero4 from '../assets/Hero4.png'


function HeroOrganisasi() {
    AOS.init({
        duration: 2000,
    });
    return (
        <div className='w-full  flex flex-col justify-center'>
            <div className='flex flex-col w-full items-center h-[600px] mt-[120px]' data-aos="fade-up" >
                <div className='absolute -mt-[1px] '>
                    <img src={Hero2} alt="" />
                </div>
                <div className='absolute -z-10 -mt-[33px]'  >
                    <img src={Hero3} alt="" />
                </div>
                <div className='absolute -z-40 -mt-[69px]'  >
                    <img src={Hero4} alt="" />
                </div>
                <div className='flex flex-col z-20 '>
                    <h1 className='text-[96px] font-bold text-[#eeee] animate-bounce'>Organisasi Mahasiswa.</h1>
                    <div className='mt-[115px] text-[#eeee] '>
                        <p className='text-center text-[28px] font-[500px]'> <span className='font-bold'>Politeknik Negeri Sriwijaya</span> memiliki lebih dari 20
                            <span className='font-bold'> Organisasi</span> <br />Mahasiswa yang aktif dalam bidangnya masing
                            masing, Organisasi <br /> <span className='font-bold'>Mahasiswa</span> terdiri dari <span className='font-bold'>Eksekutif </span>
                            dan <span className='font-bold'>Legislatif</span> serta <span className='font-bold'>HMJ</span>,
                            <span className='font-bold'> UKM</span>  dan <br /> <span className='font-bold'>Komunitas</span>.</p>
                    </div>
                </div>
            </div>
            <div className='-mt-[78px] w-full h-[150px] bg-gradient-to-b from-[#00ADB59E] to-[#222831] z-10 '>
            </div>
        </div>
    )
}

export default HeroOrganisasi