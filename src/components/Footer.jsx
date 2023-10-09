import React from 'react'
import email from '../assets/email.png'
import call from '../assets/phone-call.png'
import mark from '../assets/marker.png'

function Footer() {
    return (
        <div className='flex flex-col w-full  md:h-[320px] h-[480px] bg-[#393E46]  '>
            <div className='flex md:flex-row flex-col ml-14'>
                <div className='md:ml-[165px] md:mt-[50px] mt-[28px] flex flex-col '>
                    <div className='text-[#eeee] text-[30px] font-bold   '>
                        <span className='text-[#00ADB5] text-[30px] font-bold'>SUI</span>.
                        <div className='my-[20px]'>
                            <p className='text-[#eeee] font-normal text-[15px]'>Terima kasih telah bergabung dengan kami, dan selamat <br />
                                mengeksplorasi semua yang kami tawarkan! Jika Anda <br />
                                memiliki pertanyaan atau masukan, jangan ragu <br />
                                untuk menghubungi kami.</p>
                        </div>
                    </div>
                </div>

                <div className='md:ml-[340px] md:mt-[50px]  '>
                    <div>
                        <h1 className='text-[20px] font-bold text-[#eeee]'>Contact
                            <span className='text-[20px] font-bold text-[#00ADB5]'>Us</span>.</h1>
                    </div>

                    <div className='mt-[25px] flex flex-col gap-[17px] '>
                        <div className='flex flex-row gap-[31px] items-center'>
                            <img src={email} alt="" className='w-[20px] h-[20px]' />
                            <h1 className='text-[15px] text-[#eeee] font-normal'>Faizaflah009@gmail.com</h1>
                        </div>
                        <div className='flex flex-row gap-[31px] items-center'>
                            <img src={call} alt="" className='w-[20px] h-[20px]' />
                            <h1 className='text-[15px] text-[#eeee] font-normal'>+62 832 8928 0098</h1>
                        </div>
                        <div className='flex flex-row gap-[31px] items-center'>
                            <img src={mark} alt="" className='w-[20px] h-[20px]' />
                            <h1 className='text-[15px] text-[#eeee] font-normal'>Jalan Srijaya, Politeknik Negeri <br />
                                Sriwijaya Palembang.</h1>
                        </div>
                    </div>
                </div>
            </div>

            <div className='w-full items-center flex justify-center'>
                <div className='flex  md:w-[1200px] w-full my-10  bg-[#00ADB5] h-[0.5px] justify-center flex-row'>
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