import React from 'react'
import Image from 'next/image'
import logo1 from '@/assets/images/logo1.webp'
import { getDictionary } from '@/lib/dictionary'

export default async function Hakkimizda({ params: { lang }}) {

  const { about } = await getDictionary(lang)
  return (
    <>
  <div className='about-bg flex flex-col items-center'>
    <div className="m-auto flex flex-col items-center">
    <h1 className="background-h lg:text-5xl text-xl w-fit mx-auto px-4 text-gray-200">{about.h2} </h1>
    <p className="background-p lg:text-3xl text-lg lg:mt-4 mt-2 w-fit mx-auto px-4 text-gray-300">{about.h1}</p>
  </div>
  </div>
  <div className='text-black h-fit lg:mb-0 mb-10'>
      <h1 className='text-2xl  border-b border-[#E5BA73] text-center mt-20'>{about.h1}</h1>
       <div className='flex flex-col items-center justify-center text-center'>
        <div className=' mt-10 lg:mt-10 text-center h-fit mb-20 w-[90%]'>
         <div className='h-[150px] max-h-fit w-full flex justify-center items-center mb-10'>
          <Image className='rounded-md' src={logo1} alt="" width={400} placeholder="blur"  />
         </div>
            <div className='mt-10 md:mt-0 lg:mt-0 h-full w-full lg:text-left text-center'>
              <p>{about.p}
              </p>
           </div>
      </div>
     </div>
    </div>
    </>
  );
}
