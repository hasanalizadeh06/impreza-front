import {hasLocale, NextIntlClientProvider} from 'next-intl';
import {routing} from '@/i18n/routing';
import {notFound} from 'next/navigation';
import React from "react";
import {setRequestLocale} from 'next-intl/server';
import {locales} from "@/constants/locale";
import "../global.scss";

import Navbar from '@/layouts/navbar/Navbar';
import Footer from '@/layouts/footer/Footer';

export default async function LocaleLayout({children, params}: Readonly<{
    children: React.ReactNode;
    params: Promise<{locale: string}>;
}>) {
    const {locale} = await params;
    if (!hasLocale(routing.locales, locale)) {
        notFound();
    }

    setRequestLocale(locale);

    return (
        <html lang={locale}>
            <head>
                <meta name="description" content="Impreza" />
                {/* <link rel="icon" href="/3.png" sizes="any" /> */}
                {/* <link rel="stylesheet" href="" /> */}
            </head>
            <body>
            <div className="appContainer">
                <NextIntlClientProvider>
                    <Navbar/>
                    <div className="pageContent">
                        {children}
                    </div>
                    <Footer/>
                </NextIntlClientProvider>
            </div>
            </body>
        </html>
    );
}


export function generateStaticParams() {
    return locales.map(locale => ({ locale }));
}
