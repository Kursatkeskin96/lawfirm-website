
import Ozge from '@/components/Ozge'
import Contact from '@/components/Contact';
import CalismaCarousel from '@/components/CalismaCarousel';
import Sigorta from '@/components/Sigorta';


export default async function Home() {

  return (
    <div>
    <div className='home-background flex flex-col items-center'>
    <div className="m-auto flex flex-col items-center">
    <h1 className="background-h lg:text-3xl text-xl w-fit mx-auto px-4 bg-gray-900 text-white">Özdemir Hukuk Bürosu </h1>
    <p className="background-p lg:text-2xl text-lg mt-4 w-fit mx-auto px-4 bg-[#E5BA73] text-white">Hukuk | Danışmanlık</p>
    <button className='bg-white border border-black text-[#0a1834] rounded-md p-1 w-24 mt-5 '>İletişim</button>
  </div>
  </div>
  <Ozge />
  <Sigorta />
  <CalismaCarousel />
  <Contact />
  </div>
  )
}