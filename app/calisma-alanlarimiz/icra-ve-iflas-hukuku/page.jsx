import React from 'react'
import img from '../../../assets/images/icra.jpg'
import Image from 'next/image'
import CalismaCarousel from '@/components/CalismaCarousel'

export default function page() {
  return (
    <>
    <div className='calisma-alan-bg flex flex-col items-center'>
    <div className="m-auto flex flex-col items-center">
    <h1 className="background-h lg:text-3xl text-lg w-fit mx-auto px-4 bg-gray-900 text-white">Özdemir Hukuk Bürosu</h1>
    <p className="background-p lg:text-2xl text-lg mt-4 w-fit mx-auto px-4 bg-[#E5BA73] text-white">İcra ve İflas Hukuku</p>
  </div>
  </div>
  <div className='text-black h-fit'>
      <h1 className='text-2xl  border-b border-[#E5BA73] text-center mt-20'>İcra ve İflas Hukuku:</h1>
       <div className='flex items-center justify-center'>
        <div className='flex mt-10 lg:mt-10 justify-center flex-wrap lg:flex-nowrap items-center text-center w-[90%]'>
         <div className='max-h-fit lg:w-2/5 w-full flex justify-center mx-5'>
          <Image src={img} alt="" width={300} />
         </div>
            <div className='mt-10 md:mt-0 lg:mt-0 h-fit lg:w-3/5 w-full lg:text-left text-center flex items-center justify-center'>
              <p>Hukuk ofisimizin en önemli amaçlarından biri müvekkillerimizin hak ve
                alacaklarına hızlı ve etkili bir biçimde kavuşturulmasıdır. Bu doğrultuda müvekkillerimizin
                alacaklarının tahsili amacı ile borçlu taraflar ile sulh görüşmeleri yapılması, icra müdürlükleri
                nezdinde gerekli takiplerin başlatılması ve takibi, icra hukuk mahkemeleri nezdinde temsil
                görevinin yerine getirilmesi gibi hususlarda hukuki destek ve danışmanlık hizmeti
                sağlanmaktadır. Ayrıca müvekkillerimizin aleyhine başlatılan icra takipleri açısından da ilgili
                icra ve dava dosyalarının titizlikle takibi sağlanmakta ve gerekli tüm işlemler bizzat
                yürütülmektedir.
              </p>
           </div>
      </div>
     </div>
     <CalismaCarousel />
    </div>
  </>
  )
}
