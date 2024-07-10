import React from 'react'

export default function Login() {
  return (
    <div className='h-screen flex justify-center items-center bg-gray-100'>
        <div className='w-[80%] h-[320px] md:w-[60%] lg:w-[30%] 2xl:w-[25%] bg-[#FBFBFB] rounded-[10px] flex flex-col justify-start items-center mx-auto'>
            <h2 className='text-xl font-bold mt-6  w-[80%] text-center'>Kullanici Girisi</h2>
            <label htmlFor="email" className='text-left text-gray-500 mt-10 w-[80%]'>Email</label>
            <input type="text" id="email" className=' border-gray-300 border-[1px] h-[30px] w-[80%] rounded-[7px] pl-2 text-sm' placeholder='info@hukukozdemir.com' />
            <label htmlFor="password" className='text-left text-gray-500 mt-2 w-[80%]'>Password</label>
            <input type="password" id="password" className=' border-gray-300 border-[1px] h-[30px] w-[80%] rounded-[7px] pl-2 text-sm' placeholder='********' />
            <button className='bg-[#D4BD43] hover:bg-[#e3c42a] text-white mt-8 w-[80%] rounded-[7px] h-[30px]'>Giris</button>
        </div>
    </div>
  )
}
