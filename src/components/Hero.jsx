import React from 'react'
import TypeIt from "typeit-react";
import HeroImg from "../assets/HeroImg.png"
import Logo from "../assets/SuiLogo.png"
import Card from './Card';
import Footer from '../components/Footer'
import AOS from 'aos';
import User from '../assets/users-alt.png'
import HeroBg from '../assets/HeroBg.jpg'
import Info from "../assets/info.png"




function Hero() {
  AOS.init({
    duration: 1000,
  });
  return (
    <div className='md:flex flex-col w-full  bg-[#222831] items-end'>
      <div className=' bg-cover absolute w-[100%] h-[100%]   top-0 '>
        <img src={HeroBg} alt="" className='md:flex hidden' />
      </div>

      <div className='flex md:flex-row flex-col  md:h-[655px] h-[550px] md:mx-[200px] '>
        <div className='my-[91px] flex flex-col md:mx-[35px] mx-[20px] '>
          <div className='md:h-[200px]  top-[173px] absolute  '>
            <TypeIt className="text-[#00ADB5] font-bold bg-[#393E46] md:text-[64px] text-[52px] "
              options={{
                strings: ["Sriwijaya Union", "Information"],
                speed: 150,
                cursor: 0,
                loop: true,
                waitUntilVisible: true,
              }}
            /></div>

          <div className='md:mt-[180px] mt-[150px] md:ml z-20'>
            <h2 className='text-[#eeee] md:text-[30px] text-[25px] font-semibold '>Menjelajahi Organisasi <br />Mahasiswa.</h2>
            <div>
              <p className='text-[#eeee] md:text-[18px] text-[15px]'><span className='font-bold text-[#00ADB5]'>SUI</span> adalah pusat informasi yang berdedikasi untuk <br />
                <span className='font-bold text-[#00ADB5]'>memudahkan</span> Anda dalam mengakses semua yang <br />
                perlu Anda ketahui tentang organisasi mahasiswa <br />
                dan kegiatan mereka <span className='font-bold text-[#00ADB5]'>di Politeknik Negeri Sriwijaya</span>.</p>
            </div>
            <div className='md:w-[200px] w-[385px] h-[50px] border-[5px] flex items-center justify-center border-[#00ADB5] 
            mt-[22px] a cursor-pointer text-[#eeee] transition rounded-sm ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 
            hover:text-[#00ADB5] duration-300'>
              <button className='font-medium text-[18px] '> About Us</button>
            </div>
          </div>
        </div>
      </div>

      <div className='w-full flex md:h-[340px] h-[270px] bg-[#393E46] items-center z-20 '>
        <div data-aos="fade-right" className='ml-[147px] my-[50px] hidden md:flex flex-col '>
          <div className='text-[40px] font-bold text-[#eeee]'><h1>Goals
            <span className='text-[#00ADB5]'> Sriwijaya Union <br /> Information</span>.</h1>
          </div>
          <div className='text-[#eeee] text-[18px] '>
            <p><span className='font-bold text-[#00ADB5]'>SUI</span> percaya bahwa pengalaman mahasiswa tidak hanya tentang <br />
              belajar di dalam kelas, tetapi juga tentang pertumbuhan, pengembangan <br />
              pribadi, dan berpartisipasi aktif dalam <span className='font-bold text-[#00ADB5]'>komunitas kampus</span>.
              Dengan <span className='font-bold text-[#00ADB5]'>SUI</span> , kami <br />
              ingin  <span className='font-bold text-[#00ADB5]'>memudahkan</span> Anda untuk memaksimalkan <span className='font-bold text-[#00ADB5]'><br className='md:hidden' />pengalaman</span> ini.</p>
          </div>
        </div>
        <div className='md:hidden mx-[20px]' data-aos="fade-right z-20">
          <div>
            <div className='text-[30px] font-bold text-[#eeee]'><h1>Goals
              <span className='text-[#00ADB5]'> Sriwijaya Union <br /> Information</span>.</h1>
            </div>
          </div>
          <div className='md:hidden text-[#eeee]'>
            <p><span className='font-bold text-[#00ADB5]'>SUI</span> percaya bahwa pengalaman mahasiswa tidak <br /> hanya tentang
              belajar di dalam kelas, tetapi juga <br /> tentang pertumbuhan, pengembangan
              pribadi, <br /> dan berpartisipasi aktif dalam <span className='font-bold text-[#00ADB5]'>komunitas kampus</span>.<br />
              Dengan <span className='font-bold text-[#00ADB5]'>SUI</span> , kami
              ingin  <span className='font-bold text-[#00ADB5]'>memudahkan</span> Anda untuk<br /> memaksimalkan <span className='font-bold text-[#00ADB5]'>
                pengalaman</span> ini.</p>
          </div>
        </div>
        <div data-aos="fade-left" className='ml-[250px] hidden md:flex '>
          <img src={Logo} alt="" className='w-[300px] h-[300px]  ' />
        </div>
      </div>

      <div className='w-full md:h-[770px] h-[1630px] flex flex-col mt-[71px] items-center'>
        <div className='flex items-center flex-col  '>
          <h1 className='text-[#eeee] md:text-[64px] text-[40px] font-bold'><span className='font-bold text-[#00ADB5]'>SUI </span>
            Service<span className='font-bold text-[#00ADB5]'>.</span></h1>
          <div className=' hidden md:flex'>
            <p className='text-[18px] text-[#eeee] font-normal text-center'>Kami memberikan wadah untuk mahasiswa berbagi gagasan, pendapat <br />
              dan proyekmereka melalui Informasi seputar dunia organisasi</p>
          </div>
          <div className=' md:hidden'>
            <p className='text-[15px] text-[#eeee] font-normal text-center'>Kami memberikan wadah untuk mahasiswa berbagi<br /> gagasan, pendapat
              dan proyekmereka melalui <br /> Informasi seputar dunia organisasi</p>
          </div>
        </div>

        <div className='flex md:flex-row flex-col gap-[90px] mt-[113px]'>
          <div data-aos="zoom-out-left" data-aos-duration="1000">
            <Card title={"Menghubungkan Anda dengan Organisasi Mahasiswa."} desc={"Temukan lebih dari dua puluh organisasi mahasiswa yang aktif dan beragam di Politeknik Negeri Sriwijaya. Jelajahi profil misi, dan cara bergabung."} image={User} />
          </div>
          <div data-aos="zoom-out" data-aos-duration="1000">
            <Card title={"Informasi Event Terkini."} desc={"Dapatkan akses ke informasi terkini tentang event, kegiatan, dan acara yang diselenggarakan oleh organisasi mahasiswa. Tidak akan ada lagi acara yang terlewatkan!"} image={Info} />
          </div>
          <div data-aos="zoom-out-right" data-aos-duration="1000">
            <Card title={"belum"} desc={"ada"} />
          </div>
        </div>
      </div>

      <div className='w-full flex justify-center'>
        <Footer />
      </div>
    </div>

  )
}

export default Hero