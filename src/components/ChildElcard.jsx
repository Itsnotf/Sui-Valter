import React from 'react'
import Logo from '../assets/SuiLogo.png'
import { useState } from 'react'
import Card from './Card'
import Posts from '../components/ElCard.json'

function ChildElcard(props) {

    // const [Elcard, CardChange] = useState(false)
    // const handleClick = () => CardChange(!Elcard)

    const [selectedCard, setSelectedCard] = useState(0); // Inisialisasi dengan nilai -1

    const handleClick = (index) => {
        setSelectedCard(index === selectedCard ? -1 : index); // Toggle selectedCard
    };


    return (
        <div>
            <div className="flex flex-col gap-7">
                <div className="flex flex-row">
                    {Posts.map((Elcard, index) => (
                        <div key={index}>
                            <div
                                onClick={() => handleClick(index)}
                                className={`${selectedCard === index
                                    ? 'md:w-[269px] w-[127px] md:h-[257px] h-[127px] bg-[#00ADB5] border border-[#00ADB5] rounded-[10px] flex items-center justify-center cursor-pointer transition hover:ease-in-out duration-300hover:-translate-y-2 ml-[38px]'
                                    : 'md:w-[269px] w-[127px] md:h-[257px] h-[127px]  bg-transparent border border-[#00ADB5] rounded-[10px] flex items-center justify-center cursor-pointer transition hover:ease-in-out duration-300hover:-translate-y-2 ml-[38px]'
                                    }`}
                            >
                                <img src={Logo} alt="" />
                            </div>
                        </div>
                    ))}
                </div>

                {selectedCard !== -1 && ( // Hanya tampilkan data jika selectedCard tidak sama dengan -1
                    <div className="flex flex-col">
                        <div className="flex flex-row">
                            <div className="md:w-[571px]  md:h-[257px] w-[292px] h-[228px] bg-[#222831] ml-[38px] rounded-[10px]">
                                <div className="flex flex-col md:mx-[42px] mx-[14px] mt-[26px]">
                                    <div className="flex md:flex-row flex-col md:gap-[100px]">
                                        <div>
                                            <h1 className="md:text-[20px] text-[#eeee] font-medium">
                                                {Posts[selectedCard].tittle}
                                            </h1>
                                        </div>
                                        <div>
                                            <h1 className="text-[24px] text-[15px] md:-mt-2 text-[#00ADB5] font-bold">
                                                {Posts[selectedCard].type}
                                            </h1>
                                        </div>
                                    </div>
                                    <div className="md:mt-[16px] mt-[11px]">
                                        <p className="md:text-[15px] text-[10px] text-[#eeee]">
                                            {Posts[selectedCard].desc}.
                                        </p>
                                    </div>
                                    <div className='flex justify-end '>
                                        <button className='  md:w-[200px] md:text-[15px] text-[12px] hover:text-[#00ADB5] font-medium text-[#eeee] transition-all ease-in-out hover:ease-in-out hover:scale-50 md:hover:scale-125 animate-pulse md:mt-[20px] mt-[10px] t'>Selengkapnya... </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default ChildElcard