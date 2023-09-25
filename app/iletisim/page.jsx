import React from 'react'
import Contact from '@/components/Contact';

export default function Iletisim() {
  return (
    <>
  <div className='iletisim-bg flex flex-col items-center'>
    <div className="m-auto flex flex-col items-center">
    <h1 className="background-h lg:text-3xl text-xl w-fit mx-auto px-4 bg-gray-900 text-white">Özdemir Hukuk Bürosu</h1>
    <p className="background-p lg:text-2xl text-lg mt-4 w-fit mx-auto px-4 bg-[#E5BA73] text-white">İletişim</p>
  </div>
  </div>
  <Contact />
    </>
  );
}
