'use client'
import Image from "next/image";
import Arabuluculuk from '../assets/images/arabuluculuk.jpg'

export default function Calisma() {
  return (
    <div className='text-black'>
    <h1 className='text-2xl border-b border-[#E5BA73] text-center lg:mt-10 md:mt-[500px]'>Calisma Alanlarimiz</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-y-8 max-w-[90%] mx-auto mt-10 justify-center">
      <div className="bg-gray-200 h-72 rounded-md flex justify-center items-center flex-col bg-1 hover:scale-105 duration-300 ease-in">
        <h1 className="text-white text-2xl shadow-sm uppercase">Arabuluculuk</h1>
        <button className="bg-[#E5BA73] text-white rounded-md p-1 w-24 mt-2 hover:border hover:border-white hover:bg-[#eead45]">Detay</button>
      </div>
      <div className="bg-gray-200 h-72 rounded-md flex justify-center items-center flex-col bg-2  hover:scale-105 duration-300 ease-in">
        <h1 className="text-white text-2xl shadow-sm uppercase">Arabuluculuk</h1>
        <button className="bg-[#E5BA73] text-white rounded-md p-1 w-24 mt-2 hover:border hover:border-white hover:bg-[#eead45]">Detay</button>
      </div>
      <div className="bg-gray-200 h-72 rounded-md flex justify-center items-center flex-col bg-1  hover:scale-105 duration-300 ease-in">
        <h1 className="text-white text-2xl shadow-sm uppercase">Arabuluculuk</h1>
        <button className="bg-[#E5BA73] text-white rounded-md p-1 w-24 mt-2 hover:border hover:border-white hover:bg-[#eead45]">Detay</button>
      </div>
      <div className="bg-gray-200 h-72 rounded-md flex justify-center items-center flex-col bg-2  hover:scale-105 duration-300 ease-in">
        <h1 className="text-white text-2xl shadow-sm uppercase">Arabuluculuk</h1>
        <button className="bg-[#E5BA73] text-white rounded-md p-1 w-24 mt-2 hover:border hover:border-white hover:bg-[#eead45]">Detay</button>
      </div>
      <div className="bg-gray-200 h-72 rounded-md flex justify-center items-center flex-col bg-1  hover:scale-105 duration-300 ease-in">
        <h1 className="text-white text-2xl shadow-sm uppercase">Arabuluculuk</h1>
        <button className="bg-[#E5BA73] text-white rounded-md p-1 w-24 mt-2 hover:border hover:border-white hover:bg-[#eead45]">Detay</button>
      </div>
      <div className="bg-gray-200 h-72 rounded-md flex justify-center items-center flex-col bg-2  hover:scale-105 duration-300 ease-in">
        <h1 className="text-white text-2xl shadow-sm uppercase">Arabuluculuk</h1>
        <button className="bg-[#E5BA73] text-white rounded-md p-1 w-24 mt-2 hover:border hover:border-white hover:bg-[#eead45]">Detay</button>
      </div>
    </div>
  </div>
  
  );
}