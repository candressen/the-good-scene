import LocofyFooter from '@/components/locofy-footer'
import type { Metadata } from 'next'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Contact & Waitlist',
  description: 'Get in touch or join the waitlist to stay updated on The Good Scene.',
}

export default function ContactPage() {
  return (
    <div className='min-h-screen bg-[#f6f6f6]'>
      <section className='bg-[#1e1716] px-6 py-24 text-center'>
        <div className='mx-auto max-w-[600px]'>
          <p className='mb-4 text-xs uppercase tracking-[0.3em] text-[#A392DD]'>
            Get In Touch
          </p>
          <h1 className='mb-4 font-playfair text-5xl font-bold text-white'>
            Say Hello
          </h1>
          <p className='font-poppins text-lg text-white/60'>
            Questions, feedback, or just want to stay in the loop? We would
            love to hear from you.
          </p>
        </div>
      </section>

      <section className='px-6 py-16'>
        <div className='mx-auto max-w-[600px]'>
          <ContactForm />
        </div>
      </section>

      <section className='bg-[#e3e2dd] px-6 py-16'>
        <div className='mx-auto max-w-[600px] text-center'>
          <h2 className='mb-2 font-playfair text-2xl font-bold text-[#1e1716]'>
            Contact Info
          </h2>
          <div className='mt-6 space-y-2 font-poppins text-sm text-[#666666]'>
            <p>hellothegoodscene@outlook.com</p>
            <p>Boston, MA</p>
          </div>
        </div>
      </section>
      <LocofyFooter />
    </div>
  )
}
