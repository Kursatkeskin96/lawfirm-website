import Contact from '@/components/Contact';
import CalismaCarousel from '@/components/CalismaCarousel';
import Sigorta from '@/components/Sigorta';
import { getDictionary } from '@/lib/dictionary'
import Image from 'next/image';
import Ozge2 from '@/assets/images/ozge.webp';
import Link from 'next/link';

export const metadata = {
  title: 'Özdemir Hukuk Bürosu | Ana Sayfa',
  description: 'Özdemir Hukuk ofisi, uzmanlık alanları arasında sigorta ve reasürans hukuku başta olmak üzere geniş bir yelpazede hizmet sunmaktadır. Müvekkillerimize ulusal ve uluslararası düzeyde danışmanlık, takip ve vekillik hizmetleri sağlamaktayız. Türk ve yabancı mevzuat, yargı kararları ve sektörel gelişmeler titizlikle takip edilmektedir.',
}
 


export default async function Home({ params: { lang }}) {
  
  const { home } = await getDictionary(lang)
  return (
    <div>
    <div className='home-background flex flex-col items-center'>
    <div className="m-auto flex flex-col items-center">
    <h1 className="background-h lg:text-5xl text-xl w-fit mx-auto px-4 text-gray-200">{home.herosection.h1}</h1>
    <p className="background-p lg:text-3xl text-lg lg:mt-4 mt-2 w-fit mx-auto px-4 text-gray-300">{home.herosection.p}</p>
   <Link href={`/${lang}/iletisim`}><button className='bg-[#E5BA73] hover:bg-[#f0d09d] border[1px] border-black text-black rounded-md p-1 lg:w-32 w-20 lg:mt-5 mt-2 shadow-md'>{home.herosection.button}</button></Link>
  </div>
  </div>
  <div className='text-black '>
      <h1 className='text-2xl  border-b border-[#E5BA73] text-center mt-20'>Av. Arb. Özge Özdemir</h1>
      <div className='mx-auto flex mt-10 lg:mt-10  flex-wrap lg:flex-nowrap text-center h-fit w-[90%]'>
        <div className='h-[400px] max-h-fit lg:w-2/5 w-full flex justify-center items-center my-auto'>
          <Image className='rounded-md' src={Ozge2} alt="" width={300} />
        </div>
        <div className='mt-10 md:mt-0 lg:mt-0 h-full lg:w-3/5 w-full lg:text-left flex flex-col items-center justify-center'>
          <div className=' text-left lg:mt-4'>
          <p>{home.ozge.p}</p>
          </div>
        </div>
      </div>
    </div>
    <Sigorta params={{ lang }} />
  <CalismaCarousel params={{ lang }}/>
  <Contact params={{ lang }}/>
  </div>
  )
}