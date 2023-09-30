import React from 'react'
import Image from 'next/image'
import Ozge2 from '../assets/images/ozge.png'

export default function Ozge() {
  return (
    <div className='text-black '>
      <h1 className='text-2xl  border-b border-[#E5BA73] text-center mt-20'>Av. Arb. Özge Özdemir</h1>
        <div className='mx-auto flex mt-10 lg:mt-10  flex-wrap lg:flex-nowrap text-center h-fit w-[90%]'>
         <div className='h-[400px] max-h-fit lg:w-2/5 w-full flex justify-center'>
          <Image className='rounded-md' src={Ozge2} alt="" width={300} />
         </div>
            <div className='mt-10 md:mt-0 lg:mt-0 h-full lg:w-3/5 w-full lg:text-left flex flex-col items-center justify-center'>
             <div className=' text-left lg:mt-4'>
              <p>Hukuk ofisimizin kurucu avukatı Özge Özdemir 2014 yılında İstanbul Üniversitesi Hukuk
              Fakültesi’nden mezun olmuştur. Meslek hayatına Türkiye’nin önde gelen hukuk ofislerinden birinde
              başlamış, sekiz yılı aşkın süre boyunca kariyerine ara vermeksizin burada devam etmiş, departman
              yönetici avukatlarından biri olarak çeşitli görev ve sorumluluklar üstlenmiştir. Yıllar içerisinde
              kazanmış olduğu bilgi birikimi ve tecrübenin akabinde, ulusal ve uluslararası düzlemde müvekkil ve
              danışanlara hukuk hizmeti sağlamak amacı ile Özdemir Hukuk Bürosu’nu kurmaya karar vermiştir.
              Kariyeri boyunca başta sigorta hukuku olmak üzere sözleşmeler hukuku, sorumluluk hukuku, tüketici
              hukuku, sağlık hukuku gibi özel hukukun pek çok alanında faaliyet göstermek suretiyle bilgi, uzmanlık
              ve deneyim kazanmıştır. Ulusal ve uluslararası müvekkillerin lehe ve aleyhe tüm davalarının takibi ile
              dava ve tahkim nezdinde temsil edilmelerinde aktif rol oynamış, onlara hukuki danışmanlık hizmeti
              sağlamıştır.
              Adalet Bakanlığı nezdinde gerçekleştirilen Arabuluculuk Sınavı’nı başarı ile tamamlamak suretiyle
              arabulucu unvanına hak kazanmıştır. Halihazırda birtakım uyuşmazlıklarda tarafsız ve bağımsız
              arabulucu olarak aktif rol oynamaktadır. Ayrıca müvekkillerine ait bazı uyuşmazlıklar bakımından ise
              arabuluculuk aşaması nezdinde taraf vekili sıfatıyla görev almaktadır.
              </p>
              </div>
           </div>
           
       </div>
            <div className='mt-12 w-[90%] mx-auto'>
                <p>
              Fakülte yıllarından itibaren sigorta hukukuna karşı duyduğu yoğun merak ve ilgi sayesinde bu alanda
              gelişim göstermeyi hedeflemiştir. Bu amaç doğrultusunda sigorta hukukuna dair yayınları, yargı
              kararlarını, sempozyumları, eğitimleri, programları, ulusal ve uluslararası düzlemdeki sektörel
              gelişmeleri takip etmiş, bu alanda çeşitli çalışmaları bizzat yürütmüştür. Türk Sigorta Enstitüsü Vakfı
              nezdinde düzenlenen Trafik Sigortalarında Uygulamalı Bedeni Zarar Tazminatı Hesaplamaları ile Emtia
              Nakliyatı Sigortası Genel Şartları ve Klozları konulu sertifika eğitim programlarını başarı ile
              tamamlamıştır.
              2023 yılında İstanbul Barosu nezdinde Sigorta Hukuku Komisyonu üyelerince verilen oylar ile birlikte
              Yürütme Kurulu Üyesi olarak seçilmiş olup işbu görevi yürütmeye devam etmektedir.
              Sigorta Tahkim Komisyonu nezdinde 2023 yılında gerçekleşen Hayat Dışı Sigorta Hakemliği Sınavı’nı
              başarılı olarak tamamlamak suretiyle sigorta hakemi unvanını almaya hak kazanmıştır.
              Halihazırda Özdemir Hukuk Bürosu nezdinde özel hukukun pek çok alanında ulusal ve uluslararası
              müvekkillere hukuk ve danışmanlık hizmeti sağlamaktadır.
                </p>
              </div>
     </div>
  )
}
