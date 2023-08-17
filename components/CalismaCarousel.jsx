'use client'
import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import Link from 'next/link';

export default function CalismaCarousel() {
  return (
    <div className='pb-20'> 
     <h1 className='mb-10 text-2xl border-b border-[#E5BA73] text-center lg:mt-[10px] md:mt-[300px] mt-[450px]'>Calisma Alanlarimiz</h1>
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
    onSlideChange={() => console.log('slide change')}
    onSwiper={(swiper) => console.log(swiper)}
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
      }}
    >
      <SwiperSlide>
        <Link href='/calisma-alanlarimiz/dava-takibi-ve-uyusmazlik-cozumu'>
            <div className="bg-gray-200 h-72 rounded-md flex justify-center items-center flex-col bg-3 hover:scale-105 duration-300 ease-in">
                <h1 className="text-white text-lg shadow-sm uppercase">Dava Takibi ve Uyuşmazlık Çözümü</h1>
                    <button className="bg-[#E5BA73] text-white rounded-md p-1 w-24 mt-2 hover:border hover:border-white hover:bg-[#eead45]">Detay</button>
            </div>
        </Link>
    </SwiperSlide>

    <SwiperSlide>
        <Link href='/calisma-alanlarimiz/arabuluculuk'>
            <div className="bg-gray-200 h-72 rounded-md flex justify-center items-center flex-col bg-1  hover:scale-105 duration-300 ease-in">
                <h1 className="text-white text-lg shadow-sm uppercase">Arabuluculuk</h1>
                    <button className="bg-[#E5BA73] text-white rounded-md p-1 w-24 mt-2 hover:border hover:border-white hover:bg-[#eead45]">Detay</button>
            </div> 
        </Link>
    </SwiperSlide>
    <SwiperSlide>
        <Link href='/calisma-alanlarimiz/sigorta-hukuku'>
            <div className="bg-gray-200 h-72 rounded-md flex justify-center items-center flex-col bg-7  hover:scale-105 duration-300 ease-in">
                <h1 className="text-white text-lg shadow-sm uppercase">Sigorta Hukuku</h1>
                    <button className="bg-[#E5BA73] text-white rounded-md p-1 w-24 mt-2 hover:border hover:border-white hover:bg-[#eead45]">Detay</button>
            </div>
        </Link>
    </SwiperSlide>
    <SwiperSlide>
        <Link href='/calisma-alanlarimiz/sozlesmeler-hukuku'>
            <div className="bg-gray-200 h-72 rounded-md flex justify-center items-center flex-col bg-2  hover:scale-105 duration-300 ease-in">
                <h1 className="text-white text-lg shadow-sm uppercase">Sözleşmeler Hukuku</h1>
                    <button className="bg-[#E5BA73] text-white rounded-md p-1 w-24 mt-2 hover:border hover:border-white hover:bg-[#eead45]">Detay</button>
            </div>
        </Link>
    </SwiperSlide>
    <SwiperSlide>
        <Link href='/calisma-alanlarimiz/tuketici-hukuku'>
            <div className="bg-gray-200 h-72 rounded-md flex justify-center items-center flex-col bg-9  hover:scale-105 duration-300 ease-in">
                <h1 className="text-white text-lg shadow-sm uppercase">Tüketici Hukuku</h1>
                    <button className="bg-[#E5BA73] text-white rounded-md p-1 w-24 mt-2 hover:border hover:border-white hover:bg-[#eead45]">Detay</button>
            </div>
        </Link>
    </SwiperSlide>
    <SwiperSlide>
        <Link href='/calisma-alanlarimiz/saglik-hukuku'>
            <div className="bg-gray-200 h-72 rounded-md flex justify-center items-center flex-col bg-6  hover:scale-105 duration-300 ease-in">
                <h1 className="text-white text-lg shadow-sm uppercase">Sağlık Hukuku</h1>
                    <button className="bg-[#E5BA73] text-white rounded-md p-1 w-24 mt-2 hover:border hover:border-white hover:bg-[#eead45]">Detay</button>
            </div>
        </Link>
    </SwiperSlide>
    <SwiperSlide>
        <Link href='/calisma-alanlarimiz/is-hukuku'>
            <div className="bg-gray-200 h-72 rounded-md flex justify-center items-center flex-col bg-5  hover:scale-105 duration-300 ease-in">
                <h1 className="text-white text-lg shadow-sm uppercase">İş Hukuku</h1>
                    <button className="bg-[#E5BA73] text-white rounded-md p-1 w-24 mt-2 hover:border hover:border-white hover:bg-[#eead45]">Detay</button>
            </div>
        </Link>
    </SwiperSlide>
    <SwiperSlide>
        <Link href='/calisma-alanlarimiz/icra-ve-iflas-hukuku'>
            <div className="bg-gray-200 h-72 rounded-md flex justify-center items-center flex-col bg-4 hover:scale-105 duration-300 ease-in">
                <h1 className="text-white text-lg shadow-sm uppercase">İcra ve İflas Hukuku</h1>
                    <button className="bg-[#E5BA73] text-white rounded-md p-1 w-24 mt-2 hover:border hover:border-white hover:bg-[#eead45]">Detay</button>
            </div>
        </Link>
    </SwiperSlide>
  </Swiper>
  </div>
  )
}
