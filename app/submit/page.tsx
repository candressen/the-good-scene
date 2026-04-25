import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import type { Metadata } from 'next'
import SubmitForm from '@/components/SubmitForm'

export const metadata: Metadata = {
  title: 'Submit an Event',
  description: 'Submit your event for consideration on The Good Scene. We review every submission.',
}

export default function SubmitPage() {
  return (
    <div className='min-h-screen bg-[#f6f6f6]'>
      <section className='bg-[#1e1716] px-6 py-24 text-center'>
        <div className='mx-auto max-w-[700px]'>
          <p className='mb-4 text-xs uppercase tracking-[0.3em] text-[#A392DD]'>
            Event Submission
          </p>
          <h1 className='mb-4 font-playfair text-5xl font-bold text-white'>
            Submit Your Event
          </h1>
          <p className='font-poppins text-lg text-white/60'>
            We are always looking for standout experiences. Every submission is
            personally reviewed.
          </p>
        </div>
      </section>
      <section className='px-6 py-16'>
        <div className='mx-auto max-w-[600px]'>
          <SubmitForm />
        </div>
      </section>
    </div>
  )
}
