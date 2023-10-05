
import React from 'react'
import { getDictionary } from '@/lib/dictionary';

export default async function page({ params: { lang }}) {
  const { sigorta2 } = await getDictionary(lang)
  return (
    <>
    <div className='reasurans-bg flex flex-col items-center'>
    <div className="m-auto flex flex-col items-center">
    <h1 className="background-h lg:text-5xl text-xl w-fit mx-auto px-4 text-gray-200">{sigorta2.h1}</h1>
    <p className="background-p lg:text-3xl text-lg lg:mt-4 mt-2 w-fit mx-auto px-4 text-gray-300">{sigorta2.h2}</p>
  </div>
  </div>
  <div className='text-black h-fit lg:mb-0 mb-10'>
      <h1 className='text-2xl  border-b border-[#E5BA73] text-center mt-20'>{sigorta2.h2}</h1>
       <div className='flex flex-col items-center justify-center text-center'>
        <div className=' mt-10 lg:mt-10 text-center h-fit mb-20 w-[90%]'>
            <div className='mt-10 md:mt-0 lg:mt-0 h-full w-full text-left'>
              <p className=' indent-8'>{sigorta2.p1}</p>
              <p className='indent-8 my-6'>{sigorta2.p2}</p>
              <p className="indent-8">{sigorta2.p3}</p>
              <p className="indent-8 my-6">{sigorta2.p4}</p>
              <p className="indent-8">{sigorta2.p5}</p>
              <p className="indent-8 my-6">{sigorta2.p6}</p>
              <p className="indent-8">{sigorta2.p7}</p>
              <p className="indent-8 my-6">{sigorta2.p8}</p>
              <p className="indent-8">{sigorta2.p9}</p>
              <p className="indent-8 my-6">{sigorta2.p10}</p>
              <p className="indent-8">{sigorta2.p11} </p>
           </div>
      </div>
     </div>
    </div>
    </>
  )
}
