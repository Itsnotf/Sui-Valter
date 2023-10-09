import React from 'react'
import Logo from '../assets/SuiLogo.png'
import Aos from 'aos'
import ArrowKiri from '../assets/ArrowKiri.png'
import ArrowKanan from '../assets/ArrowKanan.png'
import HmjTk from '../assets/HmjTk.png'

function HmjCard() {
    AOS.init({
        duration: 1000,
    });
    return (
        <div className='w-full mt-[100px] flex justify-center'>
            <div className='flex flex-row'>
                <div className='w-[536px] h-[542px] bg-[#393E4680] rounded-[20px]' data-aos="fade-right" >
                    <div className='mt-[52px] ml-[55px]' >
                        <h1 className='text-[40px] text-[#00ADB5] font-[700] ' >Himpunan Mahasiswa Jurusan
                            <span className='text-[#eeee]'>.</span></h1>
                        <p className='text-[24px] text-[#eeee] font-medium mt-[26px]'>Himpunan Mahasiswa Jurusan atau
                            HMJ bisa menjadi suara mahasiswa dalam berbagai isu yang berkaitan dengan
                            jurusan mereka, seperti perbaikan fasilitas, peningkatan kualitas pengajaran,
                            atau masalah masalah lain yang memengaruhi dalam jurusan tersebut.</p>
                    </div>
                </div>
                <div className='flex flex-col gap-[27px]' data-aos="fade-left">
                    <div className='w-[571px] h-[257px] bg-[#393E4680] ml-[38px] rounded-[20px]' >
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
                    <div className='w-[571px] h-[257px] border border-[#00ADB5] ml-[38px] rounded-[20px] flex justify-center items-center' >
                        <div className='flex flex-row w-[408px] h-[150px] gap-[90px]'>
                            <div className='flex items-center cursor-pointer'>
                                <img src={ArrowKiri} alt="" />
                            </div>
                            <div>
                                <img src={HmjTk} alt="" />
                            </div>
                            <div className='flex items-center cursor-pointer'>
                                <img src={ArrowKanan} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HmjCard