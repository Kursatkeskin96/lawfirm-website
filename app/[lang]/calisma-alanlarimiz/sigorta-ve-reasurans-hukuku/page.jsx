import React from 'react'
import img from '@/assets/images/sigorta-hukuk.webp'
import Image from 'next/image'
import CalismaCarousel from '@/components/CalismaCarousel'
import { getDictionary } from '@/lib/dictionary'

export const metadata = {
  title: 'Özdemir Hukuk Bürosu | Sigorta ve Reasürans Hukuku',
  description: 'Hukuk ofisimizin en önemli deneyim, uzmanlık ve çalışma alanını Sigorta ve Reasürans Hukuku oluşturmaktadır. Ulusal ve uluslararası uyuşmazlıklarda danışmanlık, takip ve taraf vekilliği hizmetleri global standartlar çerçevesinde sunulmaktadır. Yangın, taşıma hasarları, mesleki sorumluluk, mali mesuliyet, trafik kazaları gibi alanlarda yoğun bilgi birikimiyle müvekkillerimize etkin hukuk hizmeti sunmaktayız.',
}

export default async function page({ params: { lang }}) {
  const { sigortadetay } = await getDictionary(lang)
  return (
    <>
    <div className='calisma-alan-bg flex flex-col items-center'>
    <div className="m-auto flex flex-col items-center">
    <h1 className="background-h lg:text-5xl text-xl w-fit mx-auto px-4 text-gray-200">{sigortadetay.h1}</h1>
    <p className="background-p lg:text-3xl text-lg lg:mt-4 mt-2 w-fit mx-auto px-4 text-gray-300">{sigortadetay.h2}</p>
  </div>
  </div>
  <div className='text-black h-full'>
      <h1 className='text-2xl  border-b border-[#E5BA73] text-center mt-20'>{sigortadetay.h2}</h1>
       <div className='flex items-center justify-center'>
        <div className='flex mt-10 lg:mt-10 justify-center flex-wrap lg:flex-nowrap items-center text-center h-fit w-[90%]'>
         <div className='h-[300px] max-h-fit lg:w-2/5 w-full flex justify-center mx-5'>
          <Image src={img} alt="" width={300} />
         </div>
            <div className='mt-10 md:mt-0 lg:mt-0 h-full lg:w-3/5 w-full lg:text-left text-center flex items-center justify-center'>
            <p>{sigortadetay.p}</p>
           </div>
      </div>
     </div>
     <CalismaCarousel params={{ lang }}/>
    </div>
  </>
  )
}
