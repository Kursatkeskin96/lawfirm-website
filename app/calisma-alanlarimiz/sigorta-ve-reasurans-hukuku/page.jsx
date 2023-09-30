import React from 'react'
import img from '../../../assets/images/sigorta-hukuk.jpg'
import Image from 'next/image'
import CalismaCarousel from '@/components/CalismaCarousel'

export default function page() {
  return (
    <>
    <div className='calisma-alan-bg flex flex-col items-center'>
    <div className="m-auto flex flex-col items-center">
    <h1 className="background-h lg:text-3xl text-lg w-fit mx-auto px-4 bg-gray-900 text-white">Özdemir Hukuk Bürosu</h1>
    <p className="background-p lg:text-2xl text-lg mt-4 w-fit mx-auto px-4 bg-[#E5BA73] text-white">Sigorta ve Reasürans Hukuku</p>
  </div>
  </div>
  <div className='text-black h-full'>
      <h1 className='text-2xl  border-b border-[#E5BA73] text-center mt-20'>Sigorta ve Reasürans Hukuku</h1>
       <div className='flex items-center justify-center'>
        <div className='flex mt-10 lg:mt-10 justify-center flex-wrap lg:flex-nowrap items-center text-center h-fit w-[90%]'>
         <div className='h-[300px] max-h-fit lg:w-2/5 w-full flex justify-center mx-5'>
          <Image src={img} alt="" width={300} />
         </div>
            <div className='mt-10 md:mt-0 lg:mt-0 h-full lg:w-3/5 w-full lg:text-left text-center flex items-center justify-center'>
            <p>Hukuk ofisimizin en önemli deneyim, uzmanlık ve çalışma alanını Sigorta ve Reasürans
            Hukuku oluşturmaktadır. Nitekim sigorta ve reasürans sözleşmelerinden kaynaklanan her türlü ulusal
            ve uluslararası uyuşmazlık bakımından danışmanlık, takip ve taraf vekilliği hizmeti yüksek kalite ve
            global standartlar çerçevesinde sağlanmaktadır. Bu alandaki Türk ve yabancı mevzuat, yargı kararları,
            kongreler, sempozyumlar, sektörel gelişmeler titizlikle takip edilmekte ve bilgi birikimi günden güne
            genişletilmektedir.
            Ofisimizin sigorta sözleşmesinden kaynaklanan ulusal ve uluslararası uyuşmazlıklar
            bakımından ağırlıklı çalışma alanlarını; yangın ve benzeri rizikolardan kaynaklanan işyeri ve konut
            hasarları, karayolu, denizyolu, havayolu ya da demiryolunda meydana gelen taşıma hasarları, tekne
            ve liman hasarları, büyük çaplı makine hasarları, zorunlu ve ihtiyari mesleki sorumluluk
            sigortalarından doğan talepler, üçüncü şahıslara karşı mali mesuliyet sigortaları ve ürün sorumluluk
            sigortalarından doğan talepler, trafik kazalarından kaynaklanan bedeni ve maddi hasarlar, finans,
            kredi ve alacak sigortalarından doğan talepler oluşturmaktadır. Ayrıca hukuk ofisimizde burada
            sayılanların dışında kalan her türlü sigorta sözleşmesinden kaynaklanan uyuşmazlıklar sıkı bir şekilde
            takip edilmektedir. Bu uyuşmazlıklara konu hasarların dava öncesi tespitlerinde gerek fiziken gerek
            dosya üzerinden yapılan incelemelerde aktif rol oynanmakta, arabuluculuk, dava ve tahkim
            aşamalarında müvekkiller temsil edilmekte, başlangıç safhasından bitiş safhasına kadar tüm süreç
            bizzat takip edilmektedir.
            Reasürans sözleşmelerinin kurulması, revize edilmesi, düzenlenmesi gibi hususlarda
            sözleşmenin başlangıç aşamasından itibaren danışmanlık hizmeti verilmekte, hukuki uyuşmazlıkların
            önlenebilmesi için gerekli çalışmalar yürütülmekte, uyuşmazlığın ortaya çıkmasının akabinde
            alternatif uyuşmazlık çözüm yöntemleri, tahkim ve dava nezdinde müvekkiller temsil edilmektedir.
            Ofisimizin en önemli çalışma alanını oluşturan sigorta ve reasürans sözleşmelerinden
            kaynaklanan ulusal ve uluslararası tüm uyuşmazlıklar bakımından yoğun bilgi birikimi ve
            tecrübelerimize istinaden danışan ve müvekkillerimize global standartlarda kaliteli ve etkin hukuk
            hizmeti sağlamaktayız.</p>
           </div>
      </div>
     </div>
     <CalismaCarousel />
    </div>
  </>
  )
}
