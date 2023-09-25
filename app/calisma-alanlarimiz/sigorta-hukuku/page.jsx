import React from 'react'
import img from '../../../assets/images/sigorta-hukuk.jpg'
import Image from 'next/image'
import CalismaCarousel from '@/components/CalismaCarousel'

export default function page() {
  return (
    <>
    <div className='calisma-alan-bg flex flex-col items-center'>
    <div className="m-auto flex flex-col items-center">
    <h1 className="background-h lg:text-3xl text-lg w-fit mx-auto px-4 bg-gray-900 text-white">Ozdemir Hukuk Burosu</h1>
    <p className="background-p lg:text-2xl text-lg mt-4 w-fit mx-auto px-4 bg-[#E5BA73] text-white">Sigorta Hukuku</p>
  </div>
  </div>
  <div className='text-black h-full'>
      <h1 className='text-2xl  border-b border-[#E5BA73] text-center mt-20'>Sigorta Hukuku</h1>
       <div className='flex items-center justify-center'>
        <div className='flex mt-10 lg:mt-10 justify-center flex-wrap lg:flex-nowrap items-center text-center h-fit w-[90%]'>
         <div className='h-[300px] max-h-fit lg:w-2/5 w-full flex justify-center mx-5'>
          <Image src={img} alt="" width={300} />
         </div>
            <div className='mt-10 md:mt-0 lg:mt-0 h-full lg:w-3/5 w-full lg:text-left text-center flex items-center justify-center'>
              <p>Hukuk ofisimizin en önemli uzmanlık alanlarından biri olan sigorta hukuku
                dalında deneyimli, yetkin ve uzman kadromuz tarafından yoğun ve kapsamlı çalışmalar
                yürütülmektedir. Ağırlıklı olarak her türlü sigorta sözleşmesinden doğan uyuşmazlıklar
                bakımından danışmanlık hizmeti verilmekte, müvekkillerimiz gerek dava gerek tahkim
                nezdinde temsil edilmektedir. Bunun yanı sıra acentelik ve reasürans ilişkilerinden doğan
                uyuşmazlıklar da aynı titizlik ve yetkinlikle takip edilmektedir. Sigorta hukuku alanında ulusal
                ve uluslararası düzlemde tüm gelişmeler, sempozyum, panel ve kongreler, akademik yayınlar,
                mevzuatsal değişiklikler, yargı kararları sıkı bir şekilde takip edilmektedir. Bu kapsamda
                danışan ve müvekkillere en güncel bilgiler aktarılmak suretiyle etkin çözüm önerileri
                sunulabilmektedir.
              </p>
           </div>
      </div>
     </div>
     <CalismaCarousel />
    </div>
  </>
  )
}
