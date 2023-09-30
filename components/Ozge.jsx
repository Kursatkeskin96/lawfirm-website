import React from 'react'
import Image from 'next/image'
import Ozge2 from '../assets/images/ozge.png'

export default function Ozge() {
  return (
    <div className='text-black '>
      <h1 className='text-2xl  border-b border-[#E5BA73] text-center mt-20'>Av. Arb. Özge Özdemir</h1>
        <div className='mx-auto flex mt-10 lg:mt-10  flex-wrap lg:flex-nowrap text-center h-fit w-[90%]'>
         <div className='h-[400px] max-h-fit lg:w-2/5 w-full flex justify-center items-center my-auto'>
          <Image className='rounded-md' src={Ozge2} alt="" width={300} />
         </div>
            <div className='mt-10 md:mt-0 lg:mt-0 h-full lg:w-3/5 w-full lg:text-left flex flex-col items-center justify-center'>
             <div className=' text-left lg:mt-4'>
              <p>Hukuk ofisimizin kurucu avukatı Özge Özdemir 2014 yılında İstanbul Üniversitesi Hukuk Fakültesi’nden mezun olmuştur. Meslek hayatına Türkiye’nin önde gelen hukuk ofislerinden birinde başlamış, sekiz yılı aşkın süre boyunca burada devam etmiş, departman yönetici avukatlarından biri olarak çeşitli görev ve sorumluluklar üstlenmiştir. Yıllar içerisinde kazanmış olduğu bilgi birikimi ve tecrübenin akabinde, ulusal ve uluslararası düzlemde müvekkil ve danışanlara hukuk hizmeti sağlamak amacı ile Özdemir Hukuk Bürosu’nu kurmaya karar vermiştir. Kariyeri boyunca başta sigorta hukuku olmak üzere sözleşmeler hukuku, sorumluluk hukuku, tüketici hukuku, sağlık hukuku gibi özel hukukun pek çok alanında faaliyet göstermiştir. Ayrıca Adalet Bakanlığı nezdinde tutulan sicile kayıtlı arabulucu olan Özdemir bazı uyuşmazlıklarda tarafsız ve bağımsız arabulucu olarak aktif rol oynamaktadır. Ayrıca müvekkillerine ait bazı uyuşmazlıklar bakımından ise arabuluculuk aşaması nezdinde taraf vekili sıfatıyla görev almaktadır. Sigorta hukukuna karşı duyduğu yoğun ilgi ile bu alanda gelişim göstermeyi hedeflemiş, bu alanda çeşitli çalışmaları bizzat yürütmüştür. TSEV nezdinde düzenlenen Trafik Sigortalarında Uygulamalı Bedeni Zarar Tazminatı Hesaplamaları ile Emtia Nakliyatı Sigortası Genel Şartları ve Klozları konulu sertifika eğitim programlarını başarı ile tamamlamıştır. 2023 yılında İstanbul Barosu nezdinde Sigorta Hukuku Komisyonu Yürütme Kurulu Üyesi olarak seçilmiştir. Sigorta Tahkim Komisyonu nezdinde 2023 yılında gerçekleşen Hayat Dışı Sigorta Hakemliği Sınavı’nı başarılı olarak tamamlayarak sigorta hakemi unvanını almaya hak kazanmıştır. Halihazırda Özdemir Hukuk Bürosu nezdinde özel hukukun pek çok alanında ulusal ve uluslararası müvekkillere hukuk ve danışmanlık hizmeti sağlamaktadır.
              </p>
              </div>
           </div>
           
       </div>
     </div>
  )
}
