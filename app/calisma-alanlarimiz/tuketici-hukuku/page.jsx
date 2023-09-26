import React from 'react'
import img from '../../../assets/images/tuketici.jpg'
import Image from 'next/image'
import CalismaCarousel from '@/components/CalismaCarousel'

export default function page() {
  return (
    <>
    <div className='calisma-alan-bg flex flex-col items-center'>
    <div className="m-auto flex flex-col items-center">
    <h1 className="background-h lg:text-3xl text-lg w-fit mx-auto px-4 bg-gray-900 text-white">Özdemir Hukuk Bürosu</h1>
    <p className="background-p lg:text-2xl text-lg mt-4 w-fit mx-auto px-4 bg-[#E5BA73] text-white">Tüketici Hukuku</p>
  </div>
  </div>
  <div className='text-black h-full'>
      <h1 className='text-2xl  border-b border-[#E5BA73] text-center mt-20'>Tüketici Hukuku</h1>
       <div className='flex items-center justify-center'>
        <div className='flex mt-10 lg:mt-10 justify-center flex-wrap lg:flex-nowrap items-center text-center h-fit w-[90%]'>
         <div className='h-[300px] max-h-fit lg:w-2/5 w-full flex justify-center mx-5'>
          <Image src={img} alt="" width={300} />
         </div>
            <div className='mt-10 md:mt-0 lg:mt-0 h-full lg:w-3/5 w-full lg:text-left text-center flex items-center justify-center'>
              <p>Tüketici işlemlerinden doğan her türlü uyuşmazlık bakımından hukuk ve
                danışmanlık hizmeti verilmektedir. Bu kapsamda tüketici ile üretici, satıcı, ithalatçı gibi kişiler
                arasındaki hukuki ilişkileri düzenleyen mevzuat ile emsal yargı kararları sıkı bir şekilde takip
                edilmekte ve güncel bilgiler edinilmektedir. Uyuşmazlığın konusu ve miktarına göre
                müvekkiller tüketici hakem heyeti ya da mahkeme nezdinde temsil edilmektedir.
              </p>
           </div>
      </div>
     </div>
     <CalismaCarousel />
    </div>
  </>
  )
}
