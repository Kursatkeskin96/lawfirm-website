import React from 'react'
import img from '@/assets/images/icra.webp'
import Image from 'next/image'
import CalismaCarousel from '@/components/CalismaCarousel'
import { getDictionary } from '@/lib/dictionary'

export const metadata = {
  title: 'Özdemir Hukuk Bürosu | İcra ve İflas Hukuku',
  description: 'Özdemir Hukuk ofisi olarak, müvekkillerimizin hak ve alacaklarına hızlı ve etkili bir şekilde kavuşmalarını sağlamak için çaba gösteriyor. Alacak tahsili için borçlu taraflarla sulh görüşmeleri yapılması, icra müdürlüklerinde takip başlatılması ve takip edilmesi, icra hukuk mahkemelerinde temsil görevi gibi konularda hukuki destek ve danışmanlık sağlıyoruz.',
}

export default async function page({ params: { lang }}) {
  const { icra } = await getDictionary(lang)
  return (
    <>
    <div className='calisma-alan-bg flex flex-col items-center'>
    <div className="m-auto flex flex-col items-center">
    <h1 className="background-h lg:text-5xl text-xl w-fit mx-auto px-4 text-gray-200">{icra.h1}</h1>
    <p className="background-p lg:text-3xl text-lg lg:mt-4 mt-2 w-fit mx-auto px-4 text-gray-300">{icra.h2}</p>
  </div>
  </div>
  <div className='text-black h-fit'>
      <h1 className='text-2xl  border-b border-[#E5BA73] text-center mt-20'>{icra.h2}</h1>
       <div className='flex items-center justify-center'>
        <div className='flex mt-10 lg:mt-10 justify-center flex-wrap lg:flex-nowrap items-center text-center w-[90%]'>
         <div className='max-h-fit lg:w-2/5 w-full flex justify-center mx-5'>
          <Image src={img} alt="" width={300} />
         </div>
            <div className='mt-10 md:mt-0 lg:mt-0 h-fit lg:w-3/5 w-full lg:text-left text-center flex items-center justify-center'>
              <p>{icra.p}</p>
           </div>
      </div>
     </div>
     <CalismaCarousel params={{ lang }}/>
    </div>
  </>
  )
}
