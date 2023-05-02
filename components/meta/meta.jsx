import React, { useState, useEffect } from 'react';
import Head from "next/head"


export default function Meta({meta, lang}){
    const [currentPath, setcurrentPath] = useState('');
    useEffect(() => {
        setcurrentPath(window.location.href)
    })
    
    return(
        <Head>
            {/* Primary Meta Tags */}
            <title>{meta.title[lang]}</title>
            <meta name="title" content={meta.title[lang]} />
            <meta name="description" content={meta.description[lang]} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={currentPath} />
            <meta property="og:title" content={meta.title[lang]} />
            <meta property="og:description" content={meta.description[lang]} />
            <meta property="og:image" content={`https://res.cloudinary.com/milksoup/image/upload/f_auto,q_auto${meta.image}`} />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={currentPath} />
            <meta property="twitter:title" content={meta.title[lang]} />
            <meta property="twitter:description" content={meta.description[lang]} />
            <meta property="twitter:image" content={`https://res.cloudinary.com/milksoup/image/upload/f_auto,q_auto${meta.image}`} />

            <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        </Head>
    )
}