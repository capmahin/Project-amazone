import Head from "next/head"
import React from 'react'

export default function Layout({ title,children}) {
  return (
    <>

   <Head>
        <title>{title ? title + '- Amazona':'Amazona'}</title>
        <meta name="description" content="Ecommerce Website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

    <div>
        <header>

        </header>
        <main>
         {children}
        </main>
        <footer>

        </footer>
    </div>
    
    </>
  )
}
