import React from 'react'
import { i18n } from '@/i18n.config'
import Link from 'next/link'

export default function CustomLinks({href, lang, ...props}) {
    const isDefaultLang = lang === i18n.defaultLocale

    const path = isDefaultLang ? href : `/${lang}${href}
    `
  return <Link href={path} {...props} />
}
