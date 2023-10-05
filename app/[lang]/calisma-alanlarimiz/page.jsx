import React from 'react'
import Link from 'next/link';
import { getDictionary } from '@/lib/dictionary'

export default async function Calisma({ params: { lang }}) {

  const { calisma } = await getDictionary(lang)

  return (
    <>
  <div className='calisma-alan-bg flex flex-col items-center'>
    <div className="m-auto flex flex-col items-center">
    <h1 className="background-h lg:text-5xl text-xl w-fit mx-auto px-4 text-gray-200">{calisma.h1}</h1>
    <p className="background-p lg:text-3xl text-lg lg:mt-4 mt-2 w-fit mx-auto px-4 text-gray-300">{calisma.h2}</p>
  </div>
  </div>
  <h1 className='text-2xl border-b border-[#E5BA73] text-center mt-20'>{calisma.h2}</h1>
  <div className='h-full grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mx-auto gap-2 gap-y-10 mt-10 mb-10'>

  <Link href='/calisma-alanlarimiz/dava-takibi-ve-uyusmazlik-cozumu'>
    <div className='w-[300px] mx-auto'>
   <div className="bg-gray-200 h-72 rounded-md flex justify-center items-center flex-col bg-3 hover:scale-105 duration-300 ease-in">
     <h1 className="text-white text-lg shadow-sm">{calisma.p1}</h1>
      <button className="bg-[#E5BA73] text-white rounded-md p-1 w-24 mt-2 hover:border hover:border-white hover:bg-[#eead45]">{calisma.button}</button>
    </div>
    </div>
    </Link>

  <Link href='/calisma-alanlarimiz/arabuluculuk'>
    <div className='w-[300px] mx-auto'>
   <div className="bg-gray-200 h-72 rounded-md flex justify-center items-center flex-col bg-1 hover:scale-105 duration-200 ease-in">
     <h1 className="text-white text-lg shadow-sm">{calisma.p2}</h1>
      <button className="bg-[#E5BA73] text-white rounded-md p-1 w-24 mt-2 hover:border hover:border-white hover:bg-[#eead45]">{calisma.button}</button>
    </div>
    </div>
    </Link>

    <Link href='/calisma-alanlarimiz/sigorta-ve-reasurans-hukuku'>
    <div className='w-[300px] mx-auto'>
   <div className="bg-gray-200 h-72 rounded-md flex justify-center items-center flex-col bg-7 hover:scale-105 duration-200 ease-in">
     <h1 className="text-white text-lg shadow-sm">{calisma.p3}</h1>
      <button className="bg-[#E5BA73] text-white rounded-md p-1 w-24 mt-2 hover:border hover:border-white hover:bg-[#eead45]">{calisma.button}</button>
    </div>
    </div>
    </Link>

    <Link href='/calisma-alanlarimiz/sozlesmeler-hukuku'>
    <div className='w-[300px] mx-auto'>
   <div className="bg-gray-200 h-72 rounded-md flex justify-center items-center flex-col bg-2 hover:scale-105 duration-200 ease-in">
     <h1 className="text-white text-lg shadow-sm">{calisma.p4}</h1>
      <button className="bg-[#E5BA73] text-white rounded-md p-1 w-24 mt-2 hover:border hover:border-white hover:bg-[#eead45]">{calisma.button}</button>
    </div>
    </div>
    </Link>

    <Link href='/calisma-alanlarimiz/tuketici-hukuku'>
    <div className='w-[300px] mx-auto'>
   <div className="bg-gray-200 h-72 rounded-md flex justify-center items-center flex-col bg-9 hover:scale-105 duration-200 ease-in">
     <h1 className="text-white text-lg shadow-sm">{calisma.p5}</h1>
      <button className="bg-[#E5BA73] text-white rounded-md p-1 w-24 mt-2 hover:border hover:border-white hover:bg-[#eead45]">{calisma.button}</button>
    </div>
    </div>
    </Link>

    <Link href='/calisma-alanlarimiz/saglik-hukuku'>
    <div className='w-[300px] mx-auto'>
   <div className="bg-gray-200 h-72 rounded-md flex justify-center items-center flex-col bg-6 hover:scale-105 duration-200 ease-in">
     <h1 className="text-white text-lg shadow-sm">{calisma.p6}</h1>
      <button className="bg-[#E5BA73] text-white rounded-md p-1 w-24 mt-2 hover:border hover:border-white hover:bg-[#eead45]">{calisma.button}</button>
    </div>
    </div>
    </Link>

    <Link href='/calisma-alanlarimiz/is-hukuku'>
    <div className='w-[300px] mx-auto'>
   <div className="bg-gray-200 h-72 rounded-md flex justify-center items-center flex-col bg-5 hover:scale-105 duration-200 ease-in">
     <h1 className="text-white text-lg shadow-sm">{calisma.p7}</h1>
      <button className="bg-[#E5BA73] text-white rounded-md p-1 w-24 mt-2 hover:border hover:border-white hover:bg-[#eead45]">{calisma.button}</button>
    </div>
    </div>
    </Link>

    <Link href='/calisma-alanlarimiz/icra-ve-iflas-hukuku'>
    <div className='w-[300px] mx-auto'>
   <div className="bg-gray-200 h-72 rounded-md flex justify-center items-center flex-col bg-4 hover:scale-105 duration-200 ease-in">
     <h1 className="text-white text-lg shadow-sm">{calisma.p8}</h1>
      <button className="bg-[#E5BA73] text-white rounded-md p-1 w-24 mt-2 hover:border hover:border-white hover:bg-[#eead45]">{calisma.button}</button>
    </div>
    </div>  
    </Link>

    </div>
    </>
  );
}
