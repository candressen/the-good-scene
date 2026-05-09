'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

const navLinks = [
  { label: 'Our Mission', href: '/mission' },
  { label: 'Lorem', href: '/events' },
  { label: 'Calendar', href: '/calendar' },
  { label: 'Portal', href: '/contact' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  return (
    <>
      {/* Desktop nav */}
      <header className='fixed left-1/2 top-6 z-50 hidden w-[calc(100%-48px)] max-w-[1360px] -translate-x-1/2 lg:block'>
        <div className='mx-auto flex h-[72px] max-w-[1360px] items-center justify-between rounded-[18px] bg-white px-8 shadow-sm md:px-10'>
          <Link href='/' className='flex items-center'>
            <Image src='/logos/logo.svg' alt='The Good Scene' width={160} height={42} className='h-[46px] max-w-[120px] object-contain' priority />
          </Link>
          <nav className='hidden items-center gap-10 lg:flex'>
            {navLinks.map(l => (
              <Link key={l.label} href={l.href} className='text-[18px] font-medium text-[#1e1513] leading-none hover:text-[#a791e3] transition-colors'>{l.label}</Link>
            ))}
          </nav>
          <div className='hidden items-center gap-4 md:flex'>
            <Link href='/events' className='rounded-[14px] bg-[#1e1513] px-8 py-4 text-[16px] font-semibold text-white hover:bg-black transition-colors'>Get Started</Link>
            <Link href='/contact' className='rounded-[14px] border-2 border-[#1e1513] bg-white px-8 py-4 text-[16px] font-semibold text-[#1e1513] hover:bg-[#1e1513] hover:text-white transition-colors'>Contact Us</Link>
          </div>
        </div>
      </header>

      {/* Mobile nav */}
      <header className='fixed top-4 left-4 right-4 z-50 flex h-[64px] items-center justify-between rounded-[16px] bg-white px-5 shadow-sm lg:hidden'>
        <Link href='/'><Image src='/logos/logo.svg' alt='The Good Scene' width={120} height={36} className='h-9 w-auto' priority /></Link>
        <button type='button' onClick={() => setOpen(o => !o)} aria-label='Menu' className='text-[#1e1513]'>
          <svg width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2'>
            {open ? <path d='M18 6L6 18M6 6l12 12'/> : <path d='M3 12h18M3 6h18M3 18h18'/>}
          </svg>
        </button>
      </header>
      {open && (
        <div className='fixed top-[84px] left-4 right-4 z-40 rounded-[16px] border border-[#e3e2dd] bg-white px-6 py-4 shadow-lg lg:hidden'>
          <div className='flex flex-col gap-4'>
            {navLinks.map(l => <Link key={l.label} href={l.href} onClick={() => setOpen(false)} className='text-[17px] font-medium text-[#1e1513]'>{l.label}</Link>)}
            <div className='flex flex-col gap-3 pt-2'>
              <Link href='/events' onClick={() => setOpen(false)} className='rounded-full bg-[#1e1513] px-6 py-3 text-center text-sm font-semibold text-white'>Get Started</Link>
              <Link href='/contact' onClick={() => setOpen(false)} className='rounded-full border-2 border-[#1e1513] px-6 py-3 text-center text-sm font-semibold text-[#1e1513]'>Contact Us</Link>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
