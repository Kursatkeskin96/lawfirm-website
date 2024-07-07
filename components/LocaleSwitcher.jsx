'use client'
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import tr from "@/assets/images/tr.png";
import us from "@/assets/images/us.png";
import Image from "next/image";
import {i18n }from "@/i18n.config";

export default function LocaleSwitcher() {
  const pathName = usePathname();

  const [selectedLocale, setSelectedLocale] = useState("en");

  const redirectedPathName = (locale) => {
    if (!pathName) return '/';

    const pathnameIsMissingLocale = i18n.locales.every(
      (locale) => !pathName.startsWith(`/${locale}/`) && pathName !== `/${locale}`
    );

    if (pathnameIsMissingLocale) {
      if (locale === i18n.defaultLocale) return pathName;
      return `/${locale}${pathName}`;
    } else {
      if (locale === i18n.defaultLocale) {
        const segments = pathName.split('/');
        const isHome = segments.length === 2;
        if (isHome) return '/';

        segments.splice(1, 1);
        return segments.join('/');
      }

      const segments = pathName.split('/');
      segments[1] = locale;
      return segments.join('/');
    }
  }

  return (
    <div className="flex justify-start items-center mt-2 lg:mt-0">
      <div className="lg:ml-2 ml-0 mr-2">
        <Link href={redirectedPathName("en")}>
          <Image
            src={us}
            width={20}
            alt="en"
            onClick={() => setSelectedLocale("en")}
            style={{ cursor: "pointer" }}
          />
        </Link>
      </div>
      <div className="">
        <Link href={redirectedPathName("tr")}>
          <Image
            src={tr}
            width={20}
            alt="tr"
            onClick={() => setSelectedLocale("tr")}
            style={{ cursor: "pointer" }}
          />
        </Link>
      </div>
    </div>
  );
}
