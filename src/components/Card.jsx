import React from 'react'
import User from "../assets/users-alt.png"
import Aos from 'aos';


function Card(props) {
  Aos.init({
    duration: 500,
  });
  return (
    <div className="flex flex-col px-5 rounded-xl border-[3px] border-solid border-teal-500 md:w-[347px] md:h-[373px] w-[264px] h-[280px] transition-all ease-in-out hover:-translate-y-3 hover:shadow-[0px_0px_19px_7px_rgba(0,173,181,0.30)] delay-150 duration-200" data-aos="zoom-in" >
      < img
        loading="lazy"
        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/ae4f73ba-7fb3-4a6b-9b5a-986526d06f44?apiKey=1377448e9b3d4a9291b2cbbaa2e8913f&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/ae4f73ba-7fb3-4a6b-9b5a-986526d06f44?apiKey=1377448e9b3d4a9291b2cbbaa2e8913f&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ae4f73ba-7fb3-4a6b-9b5a-986526d06f44?apiKey=1377448e9b3d4a9291b2cbbaa2e8913f&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/ae4f73ba-7fb3-4a6b-9b5a-986526d06f44?apiKey=1377448e9b3d4a9291b2cbbaa2e8913f&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/ae4f73ba-7fb3-4a6b-9b5a-986526d06f44?apiKey=1377448e9b3d4a9291b2cbbaa2e8913f&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ae4f73ba-7fb3-4a6b-9b5a-986526d06f44?apiKey=1377448e9b3d4a9291b2cbbaa2e8913f&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/ae4f73ba-7fb3-4a6b-9b5a-986526d06f44?apiKey=1377448e9b3d4a9291b2cbbaa2e8913f&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/ae4f73ba-7fb3-4a6b-9b5a-986526d06f44?apiKey=1377448e9b3d4a9291b2cbbaa2e8913f&" className="aspect-square object-cover object-center w-[78px] self-center shrink-0 mt-8"
        alt="Event Image"
      />
      <h2 className="text-teal-500 text-center md:text-lg font-bold  mt-8 text-[13px]">
        Informasi Event Terkini.
      </h2>
      <p className="text-zinc-100 text-center md:text-base font-medium  md:mt-7 mt-[10px]  text-[10px]">
        Dapatkan akses ke informasi terkini <br /> tentang event, kegiatan, dan acara <br /> yang diselenggarakan oleh organisasi mahasiswa. Tidak akan ada lagi acara yang terlewatkan!
      </p>
    </div >
  );

}

export default Card