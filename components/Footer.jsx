import React from 'react'
import Link from 'next/link'

export default function Footer() {
  return (
    <div className='flex flex-col items-center justify-center bg-gray-500 text-white text-center'>
        <p className=' text-xs mt-1'>Bu site, T.B.B. Reklam Yasağı Yön.’nin 9/1. mad.’deki “Bu Yönetmelik kapsamında olanlar internet dahil, teknolojinin ve bilimin olanak tanıdığı her tür ortamda kendisini ifade etme hakkına sahiptir.” kuralına uygun olarak düzenlenmiş olup, reklam amacı taşımaz.Hukuk Büromuz, bu sitede yayımlanan bilgilerin hatasız veya eksiksiz olduğu konusunda bir garanti vermemektedir. Bu nedenle bilgilerin ne şekilde olursa olsun içeriğinden, iletilmesinden, alınmasından, saklanmasından sorumlu değildir. Verilen bilgiler genel nitelikte olup, bir davanın açılmak istenmesi durumunda, avukata danışılması önerilir; çünkü hukuk, olaya ve duruma göre değişiklik arz eder.</p>
        <div className='mt-5 text-xs text-white underline'><Link href="">Yasal Uyari</Link></div>
        <p className=' text-xs mt-1 mb-1'>Tüm Hakları Saklıdır. © 2023 | Ozdemir Hukuk | Danışmanlık | Arabuluculuk</p>
    </div>
  )
}
