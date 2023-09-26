import React from 'react'
import Image from 'next/image'
import Ozge2 from '../assets/images/ozge2.png'

export default function Ozge() {
  return (
    <div className='text-black'>
      <h1 className='text-2xl  border-b border-[#E5BA73] text-center mt-20'>Av. Arb. Özge Özdemir</h1>
       <div className='flex items-center justify-center'>
        <div className='flex mt-10 lg:mt-10 justify-center flex-wrap lg:flex-nowrap items-center text-center h-fit w-[90%]'>
         <div className='h-[300px] max-h-fit lg:w-2/5 w-full flex justify-center mx-5'>
          <Image src={Ozge2} alt="" width={300} />
         </div>
            <div className='mt-10 md:mt-0 lg:mt-0 h-full lg:w-3/5 w-full lg:text-left text-center flex items-center justify-center'>
              <p>Özdemir Hukuk Ofisi Av. Arb. Özge Özdemir tarafından 2023 yılında kurulmuştur. Özdemir 2014
                yılında İstanbul Üniversitesi Hukuk Fakültesi’nden mezun olmuştur. Meslek hayatına Türkiye’nin önde
                gelen hukuk ofislerinden birinde başlamış ve burada devam etmiştir. Ayrıca arabuluculuk unvanına da
                sahip olan Özdemir, bu süreçte başta sigorta hukuku olmak üzere sözleşmeler hukuku, tüketici
                hukuku, sağlık hukuku gibi özel hukukun pek çok alanında faaliyet göstermek suretiyle uzmanlık ve
                deneyim kazanmıştır. 2023 yılında gerçekleşen Hayat Dışı Sigorta Hakemliği sınavını başarılı olarak
                geçmek suretiyle, Sigorta Tahkim Komisyonu nezdinde hakem unvanını almaya hak kazanmıştır.
                Halihazırda İstanbul Barosu Sigorta Hukuku Komisyonu yürütme kurulu üyelerinden biri olarak görev
                yapmaktadır.
              </p>
           </div>
      </div>
     </div>
    </div>
  )
}
