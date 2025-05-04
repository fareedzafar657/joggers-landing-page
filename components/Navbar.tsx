import { Search, ShoppingBag } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50">
    <div className="container mx-auto px-4 flex items-center justify-between h-16">
      <Link href="/" className="font-bold text-xl">
        <Image
          src="/placeholder-logo.svg"
          alt="Nike Logo"
          width={100}
          height={30}
        />
      </Link>

      <nav className="hidden md:flex items-center space-x-8">
        <Link
          href="#"
          className="text-sm font-medium hover:text-slate-600 transition-colors"
        >
          What's New
        </Link>
        <Link
          href="#"
          className="text-sm font-medium hover:text-slate-600 transition-colors"
        >
          Men
        </Link>
        <Link
          href="#"
          className="text-sm font-medium hover:text-slate-600 transition-colors"
        >
          Women
        </Link>
        <Link
          href="#"
          className="text-sm font-medium hover:text-slate-600 transition-colors"
        >
          Collections
        </Link>
        <Link
          href="#"
          className="text-sm font-medium hover:text-slate-600 transition-colors"
        >
          Sale
        </Link>
        <button aria-label="Search">
          <Search className="h-5 w-5" />
        </button>
      </nav>

      <div className="flex items-center space-x-4">
        <button aria-label="Cart">
          <ShoppingBag className="h-5 w-5" />
        </button>
      </div>
    </div>
  </header>
  )
}

export default Navbar