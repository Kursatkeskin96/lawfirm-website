import React from 'react'
import img from '@/assets/images/sozlesmeler-hukuk.webp'
import Image from 'next/image'
import CalismaCarousel from '@/components/CalismaCarousel'
import { getDictionary } from '@/lib/dictionary'

export const metadata = {
  title: 'Özdemir Hukuk Bürosu | Sözleşmeler Hukuku',
  description: 'Özdemir Hukuk ofisi, müvekkil ve danışanların taraf oldukları sözleşmelerin düzenlenmesinden, mevcut sözleşmelerin hukuki incelemesine, gerektiğinde revize edilmesinden, sözleşme sürecinde doğabilecek hukuki işlemlere kadar kapsamlı ve nitelikli hizmet sunmaktadır. Sözleşmelerden kaynaklanan ihtilaflarda alternatif uyuşmazlık çözüm yolları değerlendirilir ve müvekkiller gerek dava gerek tahkim süreçlerinde temsil edilir.',
}


export default async function page({ params: { lang }}) {
  const { sozlesme } = await getDictionary(lang)
  return (
    <>
    <div className='calisma-alan-bg flex flex-col items-center'>
    <div className="m-auto flex flex-col items-center">
    <h1 className="background-h lg:text-5xl text-xl w-fit mx-auto px-4 text-gray-200">{sozlesme.h1}</h1>
    <p className="background-p lg:text-3xl text-lg lg:mt-4 mt-2 w-fit mx-auto px-4 text-gray-300">{sozlesme.h2}</p>
  </div>
  </div>
  <div className='text-black h-full'>
      <h1 className='text-2xl  border-b border-[#E5BA73] text-center mt-20'>{sozlesme.h2}</h1>
       <div className='flex items-center justify-center'>
        <div className='flex mt-10 lg:mt-10 justify-center flex-wrap lg:flex-nowrap items-center text-center h-fit w-[90%]'>
         <div className='h-[300px] max-h-fit lg:w-2/5 w-full flex justify-center mx-5'>
          <Image src={img} alt="" width={300} />
         </div>
            <div className='mt-10 md:mt-0 lg:mt-0 h-full lg:w-3/5 w-full lg:text-left text-center flex items-center justify-center'>
              <p>{sozlesme.p}</p>
           </div>
      </div>
     </div>
     <CalismaCarousel params={{ lang }}/>
    </div>
  </>
  )
}

