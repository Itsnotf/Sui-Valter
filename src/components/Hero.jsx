import React from 'react'
import HeroImg from '../assets/HeroImage.png'
import Aos from 'aos'

function Hero() {
  AOS.init({
    duration: 1000,
  });

  return (
    <div className='w-full h-[660px] flex '>
      <div className='flex flex-col md:flex-row-reverse w-full  md:h-[950px] h-[655px] md:items-start md:justify-end justify-center items-center md:absolute  md:top-0'>
        <div className='flex justify-center min-w-[50%] w-full md:w-[50%] min-h-fit md:h-[80%] h-[50%] bg-[#00ADB5] shadow-[-9px_0px_19px_7px_rgba(0,173,181,0.30)]   '>
          <img src={HeroImg} alt="" className=' max-w-fit md:min-w-[70%] h-[90%]   md:w-[80%] md:h-[60%] md:mt-[120px] ' />
        </div>
        <div className='  bg-[#222831] flex flex-col justify-center text-left md:w-[50%] md:h-[80%] h-[50%] w-[100%] text-[#eeee] '>
          <h1 className='md:ml-[120px] md:mx-0 mx-[28px] font-bold min-w-fit text-[35px]  md:text-[70px] md:mt-0 mt-[50px] text-[#00ADB5] '>Sriwijaya Union Information
            <span className='text-[#eeee]'>.</span></h1>
          <p className='md:max-w-[540px] md:mx-0 mx-[28px] text-left md:text-[20px] min-w-[50%] sm:text-[20px] text-[15px] font-medium my-[10px] md:ml-[120px]'>Pusat informasi terpusat
            yang memudahkan akses cepat dan mudah ke informasi organisasi mahasiswa di Politeknik
            Negeri Sriwijaya.</p>
          <div className='w-full h-auto md:ml-[120px]'>
            <button className='border border-[#00ADB5] hover:shadow-[0px_0px_19px_7px_rgba(0,173,181,0.30)] md:w-[201px] w-[264px] h-[44px] md:mx-0 mx-[28px] my-5 border-[3px] transition hover:-translate-y-1 hover:text-[#00ADB5] hover:font-bold hover:ease-in-out'>About Us</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero