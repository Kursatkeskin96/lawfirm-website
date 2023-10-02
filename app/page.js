
import Ozge from '@/components/Ozge'
import Contact from '@/components/Contact';
import CalismaCarousel from '@/components/CalismaCarousel';
import Sigorta from '@/components/Sigorta';


export default async function Home() {

  return (
    <div>
    <div className='home-background flex flex-col items-center'>
    <div className="m-auto flex flex-col items-center">
    <h1 className="background-h lg:text-5xl text-xl w-fit mx-auto px-4 text-gray-200">Özdemir Hukuk Bürosu </h1>
    <p className="background-p lg:text-3xl text-lg lg:mt-4 mt-2 w-fit mx-auto px-4 text-gray-300">Hukuk | Danışmanlık</p>
    <button className='bg-[#E5BA73] hover:bg-[#f0d09d] border[1px] border-black text-black rounded-md p-1 lg:w-32 w-20 lg:mt-5 mt-2 shadow-md'>İletişim</button>
  </div>
  </div>
  <Ozge />
  <Sigorta />
  <CalismaCarousel />
  <Contact />
  </div>
  )
}