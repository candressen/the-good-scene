'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

const navLinks = [
  { label: 'Our Mission', href: '/mission' },
  { label: 'Upcoming Events', href: '/events' },
  { label: 'Calendar', href: '/calendar' },
  { label: 'Contact', href: '/contact' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <nav className='fixed inset-x-0 top-0 z-50 px-6 pt-4 font-poppins text-[#1e1716]'>
      <div className='mx-auto flex h-20 max-w-[1200px] items-center justify-between rounded-2xl bg-white px-6 shadow-sm border border-[#e3e2dd]'>
        <Link href='/' className='flex items-center'>
          <Image
            src='/logos/logo.svg'
            alt='The Good Scene'
            width={160}
            height={48}
            className='h-10 w-auto'
            priority
          />
        </Link>

        <div className='hidden items-center gap-8 md:flex'>
          {navLinks.map(link => (
            <Link
              key={link.label}
              href={link.href}
              className='text-[18px] transition hover:text-[#A392DD]'
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className='hidden items-center gap-3 md:flex'>
          <Link
            href='/events'
            className='rounded-full bg-[#1e1716] px-6 py-2.5 text-sm font-medium text-white transition hover:bg-black'
          >
            Get Started
          </Link>
          <Link
            href='/contact'
            className='rounded-full border-2 border-[#1e1716] px-6 py-2.5 text-sm font-medium text-[#1e1716] transition hover:bg-[#1e1716] hover:text-white'
          >
            Contact Us
          </Link>
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
          <div className='flex flex-col gap-4'>
            <div className='flex flex-col gap-3'>
              {navLinks.map(link => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className='text-[18px] text-[#1e1716] transition hover:text-[#A392DD]'
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <div className='flex flex-col gap-3 pt-2'>
              <Link
                href='/events'
                onClick={() => setOpen(false)}
                className='rounded-full bg-[#1e1716] px-6 py-2.5 text-center text-sm font-medium text-white transition hover:bg-black'
              >
                Get Started
              </Link>
              <Link
                href='/contact'
                onClick={() => setOpen(false)}
                className='rounded-full border-2 border-[#1e1716] px-6 py-2.5 text-center text-sm font-medium text-[#1e1716] transition hover:bg-[#1e1716] hover:text-white'
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
