import React from 'react'
import Logo from '../assets/SuiLogo.png'
import Aos from 'aos'

function Elcard() {
  AOS.init({
    duration: 1000,
  });
  return (
    <div className='w-full flex justify-center mt-[100px]'>
      <div className='flex flex-row'>
        <div className='w-[536px] h-[542px] bg-[#393E4680] rounded-[20px]' data-aos="fade-right" >
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
            <div className='w-[269px] h-[257px] bg-[#00ADB5]   border 
          border-[#00ADB5] rounded-[20px] flex items-center justify-center cursor-pointer transition hover:ease-in-out duration-300
          hover:-translate-y-2 ml-[38px]'>
              <img src={Logo} alt="" />
            </div>
            <div className='w-[269px] h-[257px] hover:bg-[#00ADB5] bg-transparent border 
          border-[#00ADB5] rounded-[20px] flex items-center justify-center cursor-pointer transition hover:ease-in-out duration-300
          hover:-translate-y-2 ml-[38px]'>
              <img src={Logo} alt="" />
            </div>
          </div>
          <div className='w-[571px] h-[257px] bg-[#393E4680] ml-[38px] rounded-[20px]' data-aos="fade-up">
            <div className='flex flex-col mx-[42px] mt-[26px]'>
              <div className='flex flex-row gap-[100px]'>
                <div>
                  <h1 className='text-[24px] text-[#eeee] font-medium'>Badan Eksekutif
                    <br />Mahasiswa <span className='text-[#00ADB5] font-medium'>.</span></h1>
                </div>
                <div>
                  <h1 className='text-[36px] -mt-2 text-[#00ADB5] font-bold'>Eksekutif<span className='text-[#eeee] font-bold'>.</span></h1>
                </div>
              </div>
              <div className='mt-[16px]'>
                <p className='text-[15px] text-[#eeee]'><span className='text-[#00ADB5] font-bold'>BEM</span> adalah salah satu
                  <span className='text-[#00ADB5] font-bold'> organisasi</span> mahasiswa yang umumnya
                  ada di banyak perguruan tinggi dan universitas di Indonesia
                  dan negara lain. BEM <span className='text-[#00ADB5] font-bold'>wadah</span> yang <span className='text-[#00ADB5] font-bold'>mewakili mahasiswa</span> dalam
                  lingkup universitas atau kampus tertentu.</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Elcard