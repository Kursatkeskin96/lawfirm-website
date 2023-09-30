import React from 'react'
import sigorta from '@/assets/images/sigorta.jpg'
import Image from 'next/image'
import Link from 'next/link'

export default function Sigorta() {
  return (
    <div className='text-black'>
        <h1 className='text-2xl  border-b border-[#E5BA73] text-center mt-20'>Sigorta ve Reasürans</h1>
        <div className='mx-auto w-[90%] h-fit mt-10 flex justify-between items-center flex-wrap lg:flex-nowrap'>
            <div className='lg:w-3/5'>
                <p>Hukuk ofisimizin en önemli deneyim, uzmanlık ve çalışma alanını Sigorta ve Reasürans
Hukuku oluşturmaktadır. Nitekim sigorta ve reasürans sözleşmelerinden kaynaklanan her türlü ulusal
ve uluslararası uyuşmazlık bakımından danışmanlık, takip ve taraf vekilliği hizmeti yüksek kalite ve
global standartlar çerçevesinde sağlanmaktadır. Bu alandaki Türk ve yabancı mevzuat, yargı kararları,
kongreler, sempozyumlar, sektörel gelişmeler titizlikle takip edilmekte ve bilgi birikimi günden güne</p>
genişletilmektedir.
<p className='mt-4'>
Sigorta kavramının tarihi oldukça eskilere dayanmakta olup bu kavramın ortaya çıkmasındaki
ana ve temel düşünce günlük hayatta karşılaşabilecek bazı rizikoların, bu rizikolar ile karşı karşıya
gelme ihtimali bulunan kimseler arasında paylaştırılmasıdır. Dolayısı ile sigortanın temelinde
dayanışma ve güvence düşüncesinin yer aldığını söylemek mümkündür.  
<Link href='/sigorta-ve-reasurans-hukuku'><span className='ml-1 cursor-pointer underline text-blue-400'>Daha fazlası için tıklayın.</span></Link></p>
            </div>
            <div className='h-[350px] max-h-fit lg:w-2/5 w-full flex justify-center mt-6 lg:mt-0'>
          <Image className='rounded-md' src={sigorta} alt="" width={300} />
         </div>
        </div>
    </div>
  )
}
