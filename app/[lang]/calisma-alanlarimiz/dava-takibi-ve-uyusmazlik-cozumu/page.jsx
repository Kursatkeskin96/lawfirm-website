import React from 'react'
import img from '@/assets/images/dava-takip.webp'
import Image from 'next/image'
import CalismaCarousel from '@/components/CalismaCarousel'
import { getDictionary } from '@/lib/dictionary'

export const metadata = {
  title: 'Özdemir Hukuk Bürosu | Dava Takibi ve Uyuşmazlık Çözümü',
  description: 'Özdemir Hukuk ofisi olarak, müvekkillerimizin yaşadığı hukuki uyuşmazlıkları hızlı, etkin ve faydalı bir şekilde sonuçlandırmak için çaba gösteriyoruz. Mevzuat, emsal kararlar ve sektörel uygulamaları dikkate alarak her bir uyuşmazlığı özel ve ayrıcalıklı bir şekilde değerlendiriyor, fayda ve risk analizi yaparak yol haritası belirliyoruz.',
}

export default async function page({ params: { lang }}) {
  const { dava } = await getDictionary(lang)
  return (
    <>
    <div className='calisma-alan-bg flex flex-col items-center'>
    <div className="m-auto flex flex-col items-center">
    <h1 className="background-h lg:text-5xl text-xl w-fit mx-auto px-4 text-gray-200">{dava.h1} </h1>
    <p className="background-p lg:text-3xl text-lg lg:mt-4 mt-2 w-fit mx-auto px-4 text-gray-300">{dava.h2}</p>
  </div>
  </div>
  <div className='text-black h-fit'>
      <h1 className='text-2xl  border-b border-[#E5BA73] text-center mt-20'>{dava.h2}</h1>
       <div className='flex items-center justify-center'>
        <div className='flex mt-10 lg:mt-10 justify-center flex-wrap lg:flex-nowrap items-center text-center h-fit w-[90%]'>
         <div className='max-h-fit lg:w-2/5 w-full flex justify-center mx-5'>
          <Image src={img} alt="" width={300} />
         </div>
            <div className='mt-10 md:mt-0 lg:mt-0 h-fit lg:w-3/5 w-full lg:text-left text-center flex items-center justify-center'>
              <p>{dava.p}</p>
           </div>
      </div>
     </div>
     <CalismaCarousel params={{ lang }}/>
    </div>
  </>
  )
}
