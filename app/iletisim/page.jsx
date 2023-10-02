import React from 'react'
import Contact from '@/components/Contact';

export default function Iletisim() {
  return (
    <>
  <div className='iletisim-bg flex flex-col items-center'>
    <div className="m-auto flex flex-col items-center">
    <h1 className="background-h lg:text-5xl text-xl w-fit mx-auto px-4 text-gray-200">Özdemir Hukuk Bürosu </h1>
    <p className="background-p lg:text-3xl text-lg lg:mt-4 mt-2 w-fit mx-auto px-4 text-gray-300">İletişim</p>
  </div>
  </div>
  <Contact />
    </>
  );
}
