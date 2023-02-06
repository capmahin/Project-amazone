import Head from "next/head"
import React from 'react'

export default function Layout({ title,children}) {
  return (
    <>

   <Head>
        <title>{title ? title + '- Amazona':'Amazona'}</title>
        <meta name="description" content="Ecommerce Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

    <div className="flex min-h-screen flex-col justify-between">
        <header>
header
        </header>
        <main>
         {children}
        </main>
        <footer>
footer
        </footer>
    </div>
    
    </>
  )
}
