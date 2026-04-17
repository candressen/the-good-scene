'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { NAV_LINKS, SITE } from '@/lib/constants'

const orderedLinks = ['Our Mission', 'Upcoming Events', 'Contact'].map(
  label => NAV_LINKS.find(link => link.label === label)!
)

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <nav className='fixed inset-x-0 top-0 z-50 border-b border-[#e3e2dd] bg-white font-poppins text-[18px] text-[#1e1716]'>
      <div className='mx-auto flex max-w-[1200px] items-center justify-between px-6 py-4'>
        <Link href='/' className='font-playfair text-xl font-bold tracking-tight text-[#1e1716]'>
          {SITE.name}
        </Link>

        <div className='hidden items-center gap-8 md:flex'>
          {orderedLinks.map(link => (
            <Link
              key={link.label}
              href={link.href}
              className='transition hover:text-[#A392DD]'
            >
              {link.label}
            </Link>
          ))}
        </div>

        <button
          type='button'
          className='inline-flex items-center justify-center text-[#1e1716] md:hidden'
          onClick={() => setOpen(current => !current)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls='mobile-nav'
        >
          <svg width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2'>
            {open ? <path d='M18 6L6 18M6 6l12 12' /> : <path d='M3 12h18M3 6h18M3 18h18' />}
          </svg>
        </button>
      </div>

      {open && (
        <div id='mobile-nav' className='border-t border-[#e3e2dd] bg-white px-6 py-4 md:hidden'>
          {orderedLinks.map(link => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className='block py-3 text-[#1e1716] transition hover:text-[#A392DD]'
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  )
}
