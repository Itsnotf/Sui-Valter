import React from 'react'
import User from "../assets/users-alt.png"

function Card(props) {
  return (
    <div className='w-[350px] h-[370px] border border-[#00ADB5] rounded-[10px] items-center flex flex-col '>
      <div className='w-[80px] h-[80px]  my-[45px] bg-[#00ADB559] rounded-full flex justify-center items-center'>
        <img src={props.image} alt="" className='w-[50px] h-[50px] z-100' />
      </div>
      <div className='mx-[29px]'>
        <h2 className='text-[18px]  font-semibold text-[#EEEE] text-center'>{props.title}</h2>
        <div className='mt-[9px]'>
          <p className='text-[15px] font-normal text-[#EEEE] text-center'>{props.desc}</p>
        </div>
        {/* <div className='mt-[10px]'>
          <h1 className='font-bold text-[24px] text-[#00ADB5]'>Relations</h1>
        </div> */}
      </div>
    </div>
  )
}

export default Card