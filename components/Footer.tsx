import Link from 'next/link'
import Image from 'next/image'
import { NAV_LINKS, SITE } from '@/lib/constants'

const orderedLinks = ['Our Mission', 'Upcoming Events', 'Contact'].map(
  label => NAV_LINKS.find(link => link.label === label)!
)

const instagramHref = `https://instagram.com/${SITE.instagram.replace(/^@/, '')}`

export default function Footer() {
  return (
    <footer className='bg-[#1e1716] text-white'>
      <div className='mx-auto max-w-[1200px] px-6 py-16'>
        <div className='grid grid-cols-1 gap-12 md:grid-cols-3'>
          <div>
            <p className='mb-4 font-playfair text-2xl font-bold'>{SITE.name}</p>
            <p className='mb-6 max-w-sm text-sm leading-relaxed text-white/60'>
              Send your email to receive our newsletters and stay up to date with new events.
            </p>
            <div className='flex gap-2'>
              <label className='sr-only' htmlFor='footer-email'>
                Email address
              </label>
              <input
                id='footer-email'
                type='email'
                placeholder='Enter your email'
                className='flex-1 rounded-full bg-white/10 px-4 py-2.5 text-sm text-white placeholder:text-white/40 outline-none transition focus:bg-white/20'
              />
              <button
                type='button'
                className='rounded-full bg-[#A392DD] px-5 py-2.5 text-sm font-medium text-white transition hover:bg-[#8e7ccc]'
              >
                Subscribe
              </button>
            </div>
            <div className='mt-6 flex gap-4 text-sm'>
              <a href={instagramHref} className='text-white/60 transition hover:text-white'>
                Instagram
              </a>
              <a href={`mailto:${SITE.email}`} className='text-white/60 transition hover:text-white'>
                Email
              </a>
            </div>
          </div>

          <div>
            <h3 className='mb-4 text-sm font-semibold uppercase tracking-widest text-white/40'>
              Contact Info
            </h3>
            <div className='space-y-2 text-sm text-white/70'>
              <p>{SITE.email}</p>
              <p>Boston, MA</p>
            </div>
          </div>

          <div>
            <h3 className='mb-4 text-sm font-semibold uppercase tracking-widest text-white/40'>
              Quick Links
            </h3>
            <div className='space-y-2'>
              {orderedLinks.map(link => (
                <Link key={link.label} href={link.href} className='block text-sm text-white/70 transition hover:text-white'>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className='mt-12 border-t border-white/10 pt-6 text-center text-xs text-white/30'>
          <p>Step Into The Right Scene</p>
          <p className='mt-1'>Copyright 2026 The Good Scene. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}
