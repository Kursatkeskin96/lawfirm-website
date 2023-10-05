'use client'
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import tr from "@/assets/images/tr.png";
import us from "@/assets/images/us.png";
import Image from "next/image";

export default function LocaleSwitcher() {
  const pathName = usePathname();

  const [selectedLocale, setSelectedLocale] = useState("en"); // Default to English

  const redirectedPathName = (locale) => {
    if (!pathName) return "/";
    const segments = pathName.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  useEffect(() => {
    setSelectedLocale === 'en'
    return () => {
      setSelectedLocale === 'tr'
    }
  }, [setSelectedLocale])
  

  return (
<div className="flex justify-start items-center mt-2 lg:mt-0">
        <div className="lg:ml-2 ml-0 mr-2">
          <Link
            href={redirectedPathName("en")}
            className=""
          >
            <Image src={us} width={20} alt="en" onClick={() => setSelectedLocale("tr")} style={{ cursor: "pointer" }} />
          </Link>
        </div>
        <div className="">
          <Link
            href={redirectedPathName("tr")}
            className=""
          >
            <Image src={tr} width={20} alt="tr" onClick={() => setSelectedLocale("en")} style={{ cursor: "pointer" }} />
          </Link>
        </div>
        </div>
  );
}