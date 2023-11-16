import React from 'react'

export async function generateMetadata({params: {lang}}) {
  return {
    title: 'Özdemir Hukuk Bürosu | Yasal Uyarı',
  description: 'Özdemir Hukuk Bürosu yasal uyarı metni.',
  alternates:{
    canonical: `https://www.hukukozdemir.com/${lang}/yasal-uyari`
  }
  }
}


export default function Yasal() {
  return (
    <>
<div className='iletisim-bg flex flex-col items-center'>
    <div className="m-auto flex flex-col items-center">
    <h1 className="background-h lg:text-5xl text-xl w-fit mx-auto px-4 text-gray-200">Özdemir Hukuk Bürosu </h1>
    <p className="background-p lg:text-3xl text-lg lg:mt-4 mt-2 w-fit mx-auto px-4 text-gray-300">Yasal Uyarı</p>
  </div>
  </div>
  <div className='text-black h-fit lg:mb-0 mb-10'>
      <h2 className='text-2xl  border-b border-[#E5BA73] text-center mt-20'>Yasal Uyarı</h2>
       <div className='flex items-center justify-center'>
        <div className='flex mt-10 lg:mt-10 justify-center flex-wrap lg:flex-nowrap items-center text-center h-fit mb-20 w-[90%]'>
            <div className='mt-10 md:mt-0 lg:mt-0 h-full w-full lg:text-left text-center flex items-center justify-center'>
              <p>Yasal Uyarı,

Bu site Avukatlık Kanunu, Türkiye Barolar Birliği Reklam Yasağı Yönetmeliği ve Avukatlık Meslek Etiği İlkeleri'ne uygun olarak düzenlenmiştir.  Hiçbir şekilde reklam amacı taşımamaktadır. 

Sitede yer alan bilgi ve metinlerin içeriği, güncelliği, doğruluğu hakkında hiçbir şekilde garanti verilmemektedir. Dolayısı ile sitede yer alan bilgi ve metinlerin  hukuki görüş olarak değerlendirilmesi mümkün değildir. Nitekim her somut olayın niteliğine göre izlenecek hukuki yol değişiklik arz edebilecektir. Bu kapsamda sitede yer alan bilgi, metin ve içeriklere dayanılması nedeniyle doğacak sonuçlardan Özdemir Hukuk Bürosu hiçbir şekilde sorumlu tutulamayacaktır.

Vekalet ilişkisi kurulması bakımından sitede yer alan bilgi ve metinler hiçbir şekilde öneri değildir. Dolayısı ile bu site ziyaretçi ile avukat arasında vekil-müvekkil ilişkisi doğurmayacaktır.

Sitede yer alan bilgi, metin ve logolar başta olmak üzere tüm site içeriğinin telif hakları Özdemir Hukuk Bürosu'na aittir. Dolayısı ile bu sitede yer alan bilgi, metin, logo ve diğer tüm içerikler Özdemir Hukuk Bürosu'nun yazılı izni olmaksızın kopyalanamaz, başka bir platformda yayınlanamaz, çoğaltılamaz ve kullanılamaz.
              </p>
           </div>
      </div>
     </div>
    </div>
    </>
  );
}
