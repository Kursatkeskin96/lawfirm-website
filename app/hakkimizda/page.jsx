import React from 'react'
import Image from 'next/image'
import Ozge2 from '../../assets/images/ozge.png'
import logo1 from '@/assets/images/logo1.png'

export default function Hakkimizda() {
  return (
    <>
  <div className='about-bg flex flex-col items-center'>
    <div className="m-auto flex flex-col items-center">
    <h1 className="background-h lg:text-3xl text-xl w-fit mx-auto px-4 bg-gray-900 text-white">Özdemir Hukuk Bürosu</h1>
    <p className="background-p lg:text-2xl text-lg mt-4 w-fit mx-auto px-4 bg-[#E5BA73] text-white">Hakkımızda</p>
  </div>
  </div>
  <div className='text-black h-fit lg:mb-0 mb-10'>
      <h1 className='text-2xl  border-b border-[#E5BA73] text-center mt-20'>Hakkımızda</h1>
       <div className='flex items-center justify-center'>
        <div className='flex mt-10 lg:mt-10 justify-center flex-wrap lg:flex-nowrap items-center text-center h-fit mb-20 w-[90%]'>
         <div className='h-[150px] max-h-fit lg:w-2/5 w-full flex justify-center mx-5'>
          <Image className='rounded-md' src={logo1} alt="" width={400} />
         </div>
            <div className='mt-10 md:mt-0 lg:mt-0 h-full lg:w-3/5 w-full lg:text-left text-center flex items-center justify-center'>
              <p>Özdemir Hukuk Ofisi 2023 yılında İstanbul merkezli olarak kurulmuştur. Hukuk ofisimizde başta
                sigorta hukuku, sözleşmeler hukuku, tüketici hukuku, sağlık hukuku gibi özel hukukun pek çok dalında
                faaliyet gösterilmektedir. Mesleki etik ilkeleri çerçevesinde, kaliteli, dinamik, etkin ve sonuç odaklı
                hizmet verilmesi birincil olarak amaçlanmaktadır. Bu doğrultuda ulusal ve uluslararası hukuk
                alanındaki tüm gelişmeler büyük bir ilgi ile takip edilmekte ve değişiklikler bakımından uyum süreci
                hassasiyetle yürütülmektedir. Nihai gayemiz ise; her geçen gün mesleki ve akademik anlamda
                gelişmek, geliştirmek ve uluslararası düzlemde olgunluğa erişmektir. Bu yolda hukuk mesleğine
                yakışan bir tavır ve tutum sergilemek, azami derecede özen ve emek göstermek suretiyle müvekkil ve
                danışanlarımıza kaliteli hizmet sunacağımıza dair inancımız tamdır.
              </p>
           </div>
      </div>
     </div>
    </div>
    </>
  );
}
