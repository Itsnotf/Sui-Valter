import React from 'react'
import email from '../assets/email.png'
import call from '../assets/phone-call.png'
import mark from '../assets/marker.png'
import User from '../assets/email.png'

function Footer() {
    return (
        <div className='flex flex-col w-full  md:h-[320px] h-[480px] bg-[#222831]  '>
            <div className='flex  flex-col md:flex-row mt-[30px] md:mx-[120px] mx-[28px] gap-5 md:gap-[400px]'>
                <div className='flex flex-col  text-[#eeee] md:w-[500px] text-left gap-5'>
                    <h1 className='text-[#00ADB5] text-[40px] font-bold'>
                        SUI<span className='text-[#eeee] font-bold text-[40px]'>.</span>
                    </h1>
                    <p className='text-[12px] md:text-[18px] font-medium'>Terima kasih telah bergabung dengan kami, dan selamat
                        mengeksplorasi semua yang kami tawarkan! Jika Anda
                        memiliki pertanyaan atau masukan, jangan ragu
                        untuk menghubungi kami.</p>
                </div>
                <div className='flex flex-col gap-5'>
                    <header className='text-[35px]  text-[#eeee] font-bold'>
                        <h1>Contact <span className='text-[#00ADB5]'>Us</span></h1>
                    </header>
                    <section className='flex flex-col gap-3'>

                        <div className='flex flex-row items-center gap-[40px] text-[#eeee] font-normal'>
                            <img src={email} alt="" className='w-[20px] h-[20px]' />
                            <p>Faizaflah009@gmail.com</p>
                        </div>
                        <div className='flex flex-row items-center gap-[40px] text-[#eeee] font-normal'>
                            <img src={call} alt="" className='w-[20px] h-[20px]' />
                            <p>0895 - 0713 - 8184</p>
                        </div>
                        <div className='flex flex-row items-center gap-[40px] text-[#eeee] font-normal'>
                            <img src={mark} alt="" className='w-[20px] h-[20px]' />
                            <p>Jalan Srijaya, Politeknik Negeri
                                Sriwijaya Palembang.</p>
                        </div>

                    </section>
                </div>
            </div>



            <div className='w-full items-center flex justify-center'>
                <div className='flex  md:w-[1250px] w-full my-10  bg-[#00ADB5] h-[0.5px] justify-center flex-row shadow-[0px_0px_19px_3px_rgba(0,173,181,0.30)]'>
                    <div className='my-3 flex md:flex-row flex-col  '>
                        <div className='text-[#eeee] text-[13px] mx-[20px] gap-[50px] md:flex hidden flex-row '>
                            <div>
                                <p>Terms Of Service</p>
                            </div>
                            <div>
                                <p>Policy Pravicy</p>
                            </div>
                        </div>

                        <div className='md:ml-[511px] text-[#eeee] md:text-[13px] text-[10px]  '>
                            Copyright © 2019-2023 <span className='font-bold text-[#00ADB5]'>SUI</span> Company S.L. All rights reserved.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer