import React from 'react'
import Link from 'next/link'

export default function Footer() {
  return (
    <div className='flex flex-col items-center justify-center bg-gray-500 text-white text-center'>
        <div className='mt-5 text-xs text-white underline'><Link href="/yasal-uyari">Yasal Uyarı</Link></div>
        <p className=' text-xs mt-1 mb-1'>Tüm Hakları Saklıdır. © 2023 | Özdemir Hukuk | Danışmanlık | Arabuluculuk</p>
    </div>
  )
}
