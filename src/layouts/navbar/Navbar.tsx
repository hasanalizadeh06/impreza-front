"use client"
import Image from 'next/image'
import React from 'react'
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import "@/app/global.scss"
import "./Navbar.scss";


import { MdLanguage } from "react-icons/md";
import { MdFavoriteBorder } from "react-icons/md";
import { TbShoppingBag } from "react-icons/tb";
import { BiSearch } from "react-icons/bi";

import img from "@/../public/assets/logo.png"
import { usePathname } from 'next/navigation';

function Navbar() {
  const t = useTranslations("Navbar") 
  const pathname = usePathname()?.split("/");
  const lang = pathname && pathname[1] ? pathname[1] : "en";
  const page = pathname && pathname[2] ? pathname[2] : "";
  return (
    <div className='navbar'>
        <Link href={"/"+lang}>
            <Image src={img} alt='Logo' className='img'/>
        </Link>
        <ul className='links'>
            <li className={page === "about" ? "active" : ""}>
                <Link href="/about">
                    {t("about")}
                </Link>
            </li>
            <li className={page === "help" ? "active" : ""}>
                <Link href="/help">
                    {t("help")}
                </Link>
            </li>
        </ul>
        <ul className='navigation'>
            <li>
                <MdLanguage/>
            </li>
            <li>
                <MdFavoriteBorder/>
            </li>
            <li>
                <TbShoppingBag/>
            </li>
            <li>
                <BiSearch/>
            </li>
            <li>
                <Link href="login" className='login'>
                    {t("baa")}
                </Link>
            </li>
        </ul>
    </div>
  )
}

export default Navbar