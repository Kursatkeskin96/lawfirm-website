"use client"; 
import Link from 'next/link';
import React, {useState} from 'react'
import {AiOutlineClose, AiOutlineMenu} from "react-icons/ai"
import Image from 'next/image';
import Logo from "../assets/images/logo1.webp"

export default function Navbar() {

const [nav, setNav] = useState(false)

const handleNav = () => {
    setNav(!nav)
  }

  return (
    <div className='fixed w-full h-14 shadow-xl z-[100] bg-[white]  text-[#293133] p-4'>
     <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
      <Link href='/'>
      <Image src={Logo} width={180} alt='logo' priority={true}></Image>
      </Link>
      <div>
        <ul className='hidden md:flex'>
          <Link href='/'>
          <li className='ml-10 text-sm  border-b-2 px-1 border-[#E5BA73] transition-colors duration-300'>Ana Sayfa</li>
          </Link>
          <Link href='/hakkimizda'>
          <li className='ml-10 text-sm  border-b-2 border-transparent hover:border-[#E5BA73] transition-colors duration-300'>Hakkımızda</li>
          </Link>
          <Link href='/sigorta-ve-reasurans-hukuku'>
          <li className='ml-10 text-sm  border-b-2 border-transparent hover:border-[#E5BA73] transition-colors duration-300'>Sigorta ve Reasürans</li>
          </Link>
          <Link href='/calisma-alanlarimiz'>
          <li className='ml-10 text-sm border-b-2 border-transparent hover:border-[#E5BA73] transition-colors duration-300'>Çalışma Alanlarımız</li>
          </Link>
          <Link href='/iletisim'>
          <li className='ml-10 text-sm  border-b-2 border-transparent hover:border-[#E5BA73] transition-colors duration-300'>İletişim</li>
          </Link>
        </ul>
        <div onClick={handleNav} className='md:hidden cursor-pointer'>
          <AiOutlineMenu size={25} />
        </div>
      </div>
     </div>

    <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70  text-black ' : ''}> 
      <div className={nav 
      ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500 ' 
      : 'fixed left-[-100%] top-0 p-10 ease-in duration-500  h-screen' }>
        <div>
          <div className='flex items-center justify-between'>
            <Link href='/'>
          <Image src={Logo} width={150} alt='logo'></Image>
          </Link>
            <div onClick={handleNav} className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'>
              <AiOutlineClose />
            </div>
          </div>
          <div className='border-b border-[#E5BA73] pt-3 my-4'>

          </div>
        </div>
        <div className='flex flex-col'>
          <ul>
            <Link href='/' onClick={() => setNav(false)}>
              <li className='py-4 text-sm'>Ana Sayfa</li>
            </Link>
            <Link href='/hakkimizda' onClick={() => setNav(false)}>
              <li className='py-4 text-sm'>Hakkımızda</li>
            </Link>
            <Link href='/sigorta-ve-reasurans-hukuku' onClick={() => setNav(false)}> 
          <li className='py-4 text-sm'>Sigorta ve Reasürans</li>
          </Link>
            <Link href='/calisma-alanlarimiz' onClick={() => setNav(false)}>
              <li className='py-4 text-sm'>Çalışma Alanlarımız</li>
            </Link>
            <Link href='/iletisim' onClick={() => setNav(false)}>
              <li className='py-4 text-sm'>İletişim</li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
    </div>
  )
}

