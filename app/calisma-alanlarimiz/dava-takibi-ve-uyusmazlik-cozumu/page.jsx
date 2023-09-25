import React from 'react'
import img from '../../../assets/images/dava-takip.jpg'
import Image from 'next/image'
import CalismaCarousel from '@/components/CalismaCarousel'

export default function page() {
  return (
    <>
    <div className='calisma-alan-bg flex flex-col items-center'>
    <div className="m-auto flex flex-col items-center">
    <h1 className="background-h lg:text-3xl text-lg w-fit mx-auto px-4 bg-gray-900 text-white">Ozdemir Hukuk Burosu</h1>
    <p className="background-p lg:text-2xl text-lg mt-4 w-fit mx-auto px-4 bg-[#E5BA73] text-white">Dava Takibi ve Uyusmazlik Cozumu</p>
  </div>
  </div>
  <div className='text-black h-fit'>
      <h1 className='text-2xl  border-b border-[#E5BA73] text-center mt-20'>Dava Takip ve Uyusmazlik Cozumu</h1>
       <div className='flex items-center justify-center'>
        <div className='flex mt-10 lg:mt-10 justify-center flex-wrap lg:flex-nowrap items-center text-center h-fit w-[90%]'>
         <div className='max-h-fit lg:w-2/5 w-full flex justify-center mx-5'>
          <Image src={img} alt="" width={300} />
         </div>
            <div className='mt-10 md:mt-0 lg:mt-0 h-fit lg:w-3/5 w-full lg:text-left text-center flex items-center justify-center'>
              <p>Hukuk ofisimizde müvekkillerimizin yaşadığı hukuki
                uyuşmazlıkların hızlı, etkin ve faydalı olarak sonuçlandırılması amaçlanmaktadır. Bu gaye
                doğrultusunda her bir hukuki uyuşmazlık özel ve ayrıcalıklı olarak değerlendirilmektedir.
                Konuya dair ilgili mevzuat, emsal yargı kararları, güncel sektörel uygulamalar göz önünde
                bulundurulmak suretiyle fayda ve risk analizi yapılarak yol haritası belirlenmektedir. Bu
                kapsamda olası hukuki ihtilafların doğmasının önüne geçebilmek adına hukuki ilişkilerin
                kuruluş aşamasından itibaren tüm süreç boyunca danışmanlık hizmeti verilmekte, kısa
                zamanda olumlu sonuçlar alınabilmesi adına müvekkillerimizin menfaatlerine uygun düştüğü
                ölçüde alternatif uyuşmazlık çözüm yolları değerlendirilmekte, uyuşmazlığın yargı yoluna
                taşınması halinde ise titizlik ve hassasiyetle lehe ve aleyhe dava takipleri yapılmaktadır.
              </p>
           </div>
      </div>
     </div>
     <CalismaCarousel />
    </div>
  </>
  )
}
