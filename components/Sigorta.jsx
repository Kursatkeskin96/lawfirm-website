import React from 'react';
import sigorta1 from '@/assets/images/sigorta.webp';
import Image from 'next/image';
import Link from 'next/link';
import { getDictionary } from '@/lib/dictionary';

export default async function Sigorta({ params: { lang }}) {
  const { sigorta } = await getDictionary(lang)

  return (
    <div className='text-black'>
        <h1 className='text-2xl  border-b border-[#E5BA73] text-center mt-20'>{sigorta.h1}</h1>
        <div className='mx-auto w-[90%] h-fit mt-10 flex justify-between items-center flex-wrap lg:flex-nowrap'>
            <div className='lg:w-3/5'>
                <p>{sigorta.p1}</p>
                <p className='mt-4'>
                  {sigorta.p2}
                  <Link href={`/${lang}/sigorta-ve-reasurans-hukuku`}>
                  <span className='ml-1 cursor-pointer underline text-blue-400'>{sigorta.span}</span>
                </Link>
                </p>
            </div>
            <div className='h-[350px] max-h-fit lg:w-2/5 w-full flex justify-center mt-6 lg:mt-0'>
          <Image className='rounded-md' src={sigorta1} alt="" width={300} />
         </div>
        </div>
    </div>
  )
}
