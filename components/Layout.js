import Head from "next/head"
import Link from "next/link"
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
          <nav className="flex h-12 items-center px-4 justify-between shadow-md">
            <Link legacyBehavior href="/">
                <a className="text-lg font-bold">amazona</a>
            </Link>
            <div>
                <Link legacyBehavior href="/cart"><a className="p-2">Cart</a></Link>
                <Link legacyBehavior href="/login"><a className="p-2">Login</a></Link>
            </div>
          </nav>
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
