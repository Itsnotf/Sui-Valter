import React from 'react'
import Logo from '../assets/SuiLogo.png'
import Aos from 'aos'
import ChildElcard from './ChildElcard';
import Posts from '../components/ElCard.json'

function Elcard() {
  AOS.init({
    duration: 500,
  });
  return (
    <div className='w-full md:flex  justify-center mt-[100px]'>
      <div className='flex flex-row'>
        <div className='md:flex hidden w-[536px] h-[542px] bg-[#222831] rounded-[20px]' data-aos="fade-right" >
          <div className='mt-[52px] ml-[55px]' >
            <h1 className='text-[64px] text-[#00ADB5] font-[700] ' >Eksekutif dan Legislatif
              <span className='text-[#eeee]'>.</span></h1>
            <p className='text-[24px] text-[#eeee] font-medium mt-[26px]'>Politeknik Negeri Sriwijaya memiliki
              lebih dari 20 Organisasi Mahasiswa
              yang aktif dalam bidangnya
              masing masing, Organisasi Mahasiswa
              terdiri dari Eksekutif dan Legislatif
              serta HMJ, UKM dan Komunitas.</p>
          </div>
        </div>
        <div className='flex flex-col gap-[27px]'>
          <div className='flex flex-row ' data-aos="fade-left">
            <ChildElcard />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Elcard