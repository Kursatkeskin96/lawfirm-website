'use client'
import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import CustomLinks from './CustomLinks';
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import Link from 'next/link';

export default function CalismaCarousel({ params: { lang }}) {

    const dictionaries = {
        tr: {
          h1: 'Çalışma Alanlarımız',
          p1: 'Dava Takibi ve Uyuşmazlık Çözümü',
          p2: 'Arabuluculuk',
          p3: 'Sigorta ve Reasürans Hukuku',
          p4: 'Sözleşmeler Hukuku',
          p5: 'Tüketici Hukuku',
          p6: 'Sağlık Hukuku',
          p7: 'İş Hukuku',
          p8: 'İcra ve İflas Hukuku',
          button: 'Detay'
        },
        en: {
          h1: 'Areas of Expertise',
          p1: 'Litigation and Dispute Resolution',
          p2: 'Mediation',
          p3: 'Insurance and Reinsurance Law',
          p4: 'Contract Law',
          p5: 'Consumer Law',
          p6: 'Health Law',
          p7: 'Labor Law',
          p8: 'Execution and Bankruptcy Law',
          button: 'See More'
        },
      };
    
      const navigation = dictionaries[lang];

  return (
    <div className='pb-20'> 
     <h1 className='mb-10 text-2xl border-b border-[#E5BA73] text-center lg:mt-20 md:mt-[300px] mt-20'>{navigation.h1}</h1>
    <Swiper style={{"--swiper-pagination-color": "#FFFFFF",
  "--swiper-pagination-bullet-inactive-color": "#999999",
  "--swiper-pagination-bullet-inactive-opacity": "1",
  "--swiper-pagination-bullet-size": "8px",
  "--swiper-pagination-bullet-horizontal-gap": "6px",
  "--swiper-navigation-color": "#FFFFFF"}}
    modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
    navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      loop={true}
    autoplay={{
        delay: 2500,
      }}
    breakpoints={{
        // when window width is >= 640px
        640: {
          slidesPerView: 1,
        },
        // when window width is >= 768px
        768: {
          slidesPerView: 2,
          spaceBetween: 50,
        },
        // when window width is >= 1024px
        1024: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
        1444: {
          slidesPerView: 5,
          spaceBetween: 50,
        },
      }}
    >
      <SwiperSlide>
      <CustomLinks href={`/calisma-alanlarimiz/dava-takibi-ve-uyusmazlik-cozumu`} lang={lang}>
            <div className="bg-gray-200 h-72 rounded-md flex justify-center items-center flex-col bg-3 hover:scale-105 duration-300 ease-in">
                <h1 className="text-white text-lg shadow-sm">{navigation.p1}</h1>
                    <button className="bg-[#E5BA73] text-white rounded-md p-1 w-24 mt-2 hover:border hover:border-white hover:bg-[#eead45]">{navigation.button}</button>
            </div>
        </CustomLinks>
    </SwiperSlide>

    <SwiperSlide>
    <CustomLinks href={`/calisma-alanlarimiz/arabuluculuk`} lang={lang}>
            <div className="bg-gray-200 h-72 rounded-md flex justify-center items-center flex-col bg-1  hover:scale-105 duration-300 ease-in">
                <h1 className="text-white text-lg shadow-sm ">{navigation.p2}</h1>
                    <button className="bg-[#E5BA73] text-white rounded-md p-1 w-24 mt-2 hover:border hover:border-white hover:bg-[#eead45]">{navigation.button}</button>
            </div> 
        </CustomLinks>
    </SwiperSlide>
    <SwiperSlide>
    <CustomLinks href={`/calisma-alanlarimiz/sigorta-ve-reasurans-hukuku`} lang={lang}>
            <div className="bg-gray-200 h-72 rounded-md flex justify-center items-center flex-col bg-7  hover:scale-105 duration-300 ease-in">
                <h1 className="text-white text-lg shadow-sm ">{navigation.p3}</h1>
                    <button className="bg-[#E5BA73] text-white rounded-md p-1 w-24 mt-2 hover:border hover:border-white hover:bg-[#eead45]">{navigation.button}</button>
            </div>
        </CustomLinks>
    </SwiperSlide>
    <SwiperSlide>
    <CustomLinks href={`/calisma-alanlarimiz/sozlesmeler-hukuku`} lang={lang}>
            <div className="bg-gray-200 h-72 rounded-md flex justify-center items-center flex-col bg-2  hover:scale-105 duration-300 ease-in">
                <h1 className="text-white text-lg shadow-sm ">{navigation.p4}</h1>
                    <button className="bg-[#E5BA73] text-white rounded-md p-1 w-24 mt-2 hover:border hover:border-white hover:bg-[#eead45]">{navigation.button}</button>
            </div>
        </CustomLinks>
    </SwiperSlide>
    <SwiperSlide>
    <CustomLinks href={`/calisma-alanlarimiz/tuketici-hukuku`} lang={lang}>
            <div className="bg-gray-200 h-72 rounded-md flex justify-center items-center flex-col bg-9  hover:scale-105 duration-300 ease-in">
                <h1 className="text-white text-lg shadow-sm ">{navigation.p5}</h1>
                    <button className="bg-[#E5BA73] text-white rounded-md p-1 w-24 mt-2 hover:border hover:border-white hover:bg-[#eead45]">{navigation.button}</button>
            </div>
        </CustomLinks>
    </SwiperSlide>
    <SwiperSlide>
    <CustomLinks href={`/calisma-alanlarimiz/saglik-hukuku`} lang={lang}>
            <div className="bg-gray-200 h-72 rounded-md flex justify-center items-center flex-col bg-6  hover:scale-105 duration-300 ease-in">
                <h1 className="text-white text-lg shadow-sm ">{navigation.p6}</h1>
                    <button className="bg-[#E5BA73] text-white rounded-md p-1 w-24 mt-2 hover:border hover:border-white hover:bg-[#eead45]">{navigation.button}</button>
            </div>
        </CustomLinks>
    </SwiperSlide>
    <SwiperSlide>
    <CustomLinks href={`/calisma-alanlarimiz/is-hukuku`} lang={lang}>
            <div className="bg-gray-200 h-72 rounded-md flex justify-center items-center flex-col bg-5  hover:scale-105 duration-300 ease-in">
                <h1 className="text-white text-lg shadow-sm ">{navigation.p7}</h1>
                    <button className="bg-[#E5BA73] text-white rounded-md p-1 w-24 mt-2 hover:border hover:border-white hover:bg-[#eead45]">{navigation.button}</button>
            </div>
        </CustomLinks>
    </SwiperSlide>
    <SwiperSlide>
    <CustomLinks href={`/calisma-alanlarimiz/icra-ve-iflas-hukuku`} lang={lang}>
            <div className="bg-gray-200 h-72 rounded-md flex justify-center items-center flex-col bg-4 hover:scale-105 duration-300 ease-in">
                <h1 className="text-white text-lg shadow-sm ">{navigation.p8}</h1>
                    <button className="bg-[#E5BA73] text-white rounded-md p-1 w-24 mt-2 hover:border hover:border-white hover:bg-[#eead45]">{navigation.button}</button>
            </div>
        </CustomLinks>
    </SwiperSlide>
  </Swiper>
  </div>
  )
}
