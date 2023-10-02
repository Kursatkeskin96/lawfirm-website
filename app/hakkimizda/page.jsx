import React from 'react'
import Image from 'next/image'
import logo1 from '@/assets/images/logo1.webp'

export default function Hakkimizda() {
  return (
    <>
  <div className='about-bg flex flex-col items-center'>
    <div className="m-auto flex flex-col items-center">
    <h1 className="background-h lg:text-5xl text-xl w-fit mx-auto px-4 text-gray-200">Özdemir Hukuk Bürosu </h1>
    <p className="background-p lg:text-3xl text-lg lg:mt-4 mt-2 w-fit mx-auto px-4 text-gray-300">Hakkımızda</p>
  </div>
  </div>
  <div className='text-black h-fit lg:mb-0 mb-10'>
      <h1 className='text-2xl  border-b border-[#E5BA73] text-center mt-20'>Hakkımızda</h1>
       <div className='flex flex-col items-center justify-center text-center'>
        <div className=' mt-10 lg:mt-10 text-center h-fit mb-20 w-[90%]'>
         <div className='h-[150px] max-h-fit w-full flex justify-center items-center mb-10'>
          <Image className='rounded-md' src={logo1} alt="" width={400} placeholder="blur"  />
         </div>
            <div className='mt-10 md:mt-0 lg:mt-0 h-full w-full lg:text-left text-center'>
              <p>Özdemir Hukuk Ofisi 2023 yılında İstanbul merkezli olarak kurulmuştur. Hukuk ofisimizde başta
              sigorta hukuku, sorumluluk hukuku, sözleşmeler hukuku, tüketici hukuku, sağlık hukuku gibi özel
              hukukun pek çok dalında faaliyet gösterilmektedir. Ulusal ve uluslararası müvekkillerin dava ve
              tahkim yargılamaları nezdinde etkin bir şekilde temsili sağlanmaktadır. Yıllar boyunca edinilen bilgi
              birikimi ve deneyim doğrultusunda kaliteli hukuki danışmanlık hizmeti verilmektedir.
              Müvekkillerimize ait uyuşmazlıkların çözümü bakımından başlangıç safhasından bitiş safhasına kadar
              tüm süreç büyük bir hassasiyetle takip edilmektedir. Bu kapsamda her uyuşmazlık kendi özüne göre
              farklı değerlendirmelere tabi tutulmak suretiyle uyuşmazlığın tabi olduğu mevzuat, emsal yargı
              kararları, doktrinsel görüşler incelenmekte, akabinde müvekkillerin ihtiyaç ve menfaatlerine uygun
              olacak biçimde izlenecek hukuki yol haritası belirlenmektedir. Uyuşmazlığın niteliğine göre mümkün
              olması halinde dava yoluna gidilmeksizin öncelikle alternatif uyuşmazlık çözüm yolları
              değerlendirilmekte ve gerekli tüm risk analizleri yapılmaktadır.
              Birincil amacımız; müvekkil ve danışanlarımıza mesleki etik ilkeleri çerçevesinde, kaliteli, dinamik,
              etkin ve sonuç odaklı hukuki hizmet sağlanmasıdır. Bu doğrultuda ulusal ve uluslararası hukuk
              alanındaki tüm gelişmeler büyük bir ilgi ile takip edilmekte ve değişiklikler bakımından uyum süreci
              hassasiyetle yürütülmektedir.
              Nihai amacımız ise; her geçen gün mesleki ve akademik anlamda gelişmek, geliştirmek, ulusal ve
              uluslararası düzlemde olgunluğa erişmektir. Bu yolda hukuk mesleğine yakışan bir tavır ve tutum
              sergilemek, azami derecede özen ve emek göstermek suretiyle müvekkil ve danışanlarımıza kaliteli
              hizmet sunacağımıza dair inancımız tamdır.
              </p>
           </div>
      </div>
     </div>
    </div>
    </>
  );
}
