import React from 'react'
import img from '../../../assets/images/is-hukuk.jpg'
import Image from 'next/image'
import CalismaCarousel from '@/components/CalismaCarousel'

export default function page() {
  return (
    <>
    <div className='calisma-alan-bg flex flex-col items-center'>
    <div className="m-auto flex flex-col items-center">
    <h1 className="background-h lg:text-3xl text-lg w-fit mx-auto px-4 bg-gray-900 text-white">Ozdemir Hukuk Burosu</h1>
    <p className="background-p lg:text-2xl text-lg mt-4 w-fit mx-auto px-4 bg-[#E5BA73] text-white">İş ve Sosyal Güvenlik Hukuku</p>
  </div>
  </div>
  <div className='text-black h-full'>
      <h1 className='text-2xl  border-b border-[#E5BA73] text-center mt-20'>İş ve Sosyal Güvenlik Hukuku</h1>
       <div className='flex items-center justify-center'>
        <div className='flex mt-10 lg:mt-10 justify-center flex-wrap lg:flex-nowrap items-center text-center h-fit w-[90%]'>
         <div className='h-[300px] max-h-fit lg:w-2/5 w-full flex justify-center mx-5'>
          <Image src={img} alt="" width={300} />
         </div>
            <div className='mt-10 md:mt-0 lg:mt-0 h-full lg:w-3/5 w-full lg:text-left text-center flex items-center justify-center'>
              <p>Çalışma hayatında iş ve sosyal güvenlik hukukunun son derece
              Çalışma hayatında iş ve sosyal güvenlik hukukunun son derece
                önemli bir rol oynadığı herkesçe bilinmektedir. Nitekim ilgili mevzuatta işçi-işveren ile
                işveren-idare arasındaki ilişkiler kapsamlı bir şekilde düzenlenmiştir. İş ilişkisinin henüz
                kuruluş aşamasından itibaren mevzuata ve usulüne uygun adımlar atılması olası ihtilafların
                önüne geçilmesi açısından son derece elzemdir. Bu kapsamda hukuk ofisimizde; işe alım
                süreci de dahil olmak üzere iş sözleşmesinin kurulması, sözleşme maddelerinin hazırlanması,
                güncellenmesi ve revize edilmesi, iş ilişkisi boyunca iş ve sosyal güvenlik hukukuna dair her
                türlü konuda danışmanlık yapılması, iş sözleşmesinin feshine dair prosedürlerin uygulanması,
                fesih sürecinin yürütülmesi, ihtiyari ve zorunlu arabuluculuk süreçlerinde müvekkillerin temsil
                edilmesi, kıdem tazminatı, ihbar tazminatı, fazla mesai ücreti, yıllık izin ücreti gibi çeşitli
                işçilik alacakları, işe iade, iş kazası ve meslek hastalığından kaynaklanan maddi ve manevi
                tazminat, mobbing, hizmet tespiti gibi konulara ilişkin davaların takibi ve işbu davalarda
                müvekkillerin temsili gibi pek çok alanda hizmet verilmektedir.
              </p>
           </div>
      </div>
     </div>
     <CalismaCarousel />
    </div>
  </>
  )
}
