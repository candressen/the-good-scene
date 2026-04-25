import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Our Mission',
  description: 'We are building a more thoughtful way to experience social life.',
}

export default function MissionPage() {
  return (
    <div>
      <section className='relative bg-[#1e1716] overflow-hidden' style={{ minHeight: '760px' }}>
        <div className='mx-auto max-w-[1440px] flex items-center relative' style={{ minHeight: '760px' }}>
          <div className='relative z-10 ml-auto px-24 py-24 max-w-[620px]'>
            <h1 className='font-playfair text-6xl font-bold text-white leading-tight mb-6'>Our Mission</h1>
            <p className='font-poppins text-lg text-white/70 leading-relaxed mb-10'>
              We are building a more thoughtful way to experience social life — one that values intention, comfort,
              and meaningful connection over noise and volume.
            </p>
            <Link
              href='/events'
              className='inline-flex items-center gap-2 bg-white text-[#1e1716] rounded-full px-6 py-3 text-sm font-semibold hover:bg-[#f6f6f6] transition'
            >
              Explore More →
            </Link>
          </div>

          <div className='absolute left-0 top-0 bottom-0 w-[55%] overflow-hidden'>
            <div
              className='absolute'
              style={{
                left: '-60px',
                top: '80px',
                width: '764px',
                height: '520px',
                background: '#e7645b',
                borderRadius: '32px',
                transform: 'rotate(3deg)',
              }}
            />
            <div
              className='absolute'
              style={{
                left: '-80px',
                top: '40px',
                width: '754px',
                height: '502px',
                background: '#a791e3',
                borderRadius: '32px',
                transform: 'rotate(1deg)',
              }}
            />
            <img
              src='/images/fabiana/photo-1529903384028-929ae5dccdf1.avif'
              className='absolute object-cover rounded-[24px]'
              style={{ right: '-40px', top: '60px', width: '703px', height: '475px' }}
              alt=''
            />
          </div>
        </div>
      </section>

      <section className='relative bg-[#a791e3] overflow-hidden' style={{ minHeight: '680px' }}>
        <div className='relative mx-auto' style={{ maxWidth: '1440px', minHeight: '680px' }}>
          <div className='absolute' style={{ right: '100px', top: '-60px', width: '560px', height: '425px' }}>
            <div className='absolute rounded-xl bg-[#e7645b]' style={{ left: '0', top: '180px', width: '473px', height: '88px' }} />
            <div className='absolute rounded-xl bg-[#e7645b]' style={{ left: '60px', top: '270px', width: '563px', height: '88px' }} />
            <div className='absolute rounded-xl bg-[#e7645b]' style={{ left: '210px', top: '0px', width: '474px', height: '88px' }} />
            <div className='absolute rounded-xl bg-[#e7645b]' style={{ left: '180px', top: '280px', width: '474px', height: '88px' }} />
            <img
              src='/images/our-mission-15.jpg'
              className='absolute object-contain'
              style={{ left: '70px', top: '0', width: '559px', height: '372px' }}
              alt=''
            />
          </div>

          <div className='absolute' style={{ left: '-100px', bottom: '0', width: '644px', height: '418px' }}>
            <div className='absolute rounded-xl bg-[#e7645b]' style={{ left: '150px', bottom: '60px', width: '491px', height: '91px' }} />
            <div className='absolute rounded-xl bg-[#e7645b]' style={{ left: '35px', bottom: '150px', width: '491px', height: '91px' }} />
            <div className='absolute rounded-xl bg-[#e7645b]' style={{ left: '90px', bottom: '0', width: '490px', height: '91px' }} />
            <img
              src='/images/our-mission-16.jpg'
              className='absolute object-contain'
              style={{ left: '0', bottom: '0', width: '627px', height: '418px' }}
              alt=''
            />
          </div>

          <div className='relative z-10 flex flex-col items-center justify-center text-center px-6 py-20' style={{ minHeight: '680px' }}>
            <h2 className='font-playfair text-5xl font-bold text-white leading-tight mb-6' style={{ maxWidth: '447px' }}>
              A Carefully
              <br />
              Curated
              <br />
              Selection
            </h2>
            <p className='font-poppins text-white/80 text-lg leading-relaxed mb-8' style={{ maxWidth: '700px' }}>
              Every experience featured here is intentionally selected. We look beyond popularity and focus on quality
              — what makes an event feel engaging, welcoming, and genuinely enjoyable. This means fewer options, but
              better ones.
            </p>
            <Link
              href='/events'
              className='inline-flex items-center gap-2 bg-[#1e1716] text-white rounded-full px-6 py-3 text-sm font-semibold hover:bg-black transition'
            >
              Explore Our Events →
            </Link>
          </div>
        </div>
      </section>

      <section className='bg-[#e3e2dd] px-6 py-20 overflow-hidden'>
        <div className='mx-auto max-w-[1200px] grid grid-cols-1 md:grid-cols-2 gap-16 items-center'>
          <div>
            <h2 className='font-playfair text-5xl font-bold text-[#1e1716] leading-tight mb-6'>
              Connection
              <br />
              Over Crowds
            </h2>
            <p className='font-poppins text-[#666666] text-lg leading-relaxed mb-8'>
              We believe the best experiences are not defined by how many people attend, but by how they make you feel.
              That is why we prioritize environments that encourage natural interaction, ease, and a sense of belonging.
            </p>
            <Link
              href='/events'
              className='inline-flex items-center gap-2 bg-[#1e1716] text-white rounded-full px-6 py-3 text-sm font-semibold hover:bg-black transition'
            >
              Explore Our Events →
            </Link>
          </div>

          <div className='relative' style={{ height: '512px' }}>
            <div className='absolute rounded-[24px] bg-[#a791e3]' style={{ left: '0', bottom: '0', width: '506px', height: '424px' }} />
            <div className='absolute rounded-[24px] bg-[#e7645b]' style={{ left: '80px', top: '0', width: '493px', height: '404px' }} />
            <img
              src='/images/our-mission-17.jpg'
              className='absolute object-cover rounded-[20px]'
              style={{ left: '75px', top: '80px', width: '440px', height: '329px' }}
              alt=''
            />
          </div>
        </div>
      </section>

      <section className='relative bg-[#e7645b] overflow-hidden' style={{ minHeight: '680px' }}>
        <div className='relative mx-auto' style={{ maxWidth: '1440px', minHeight: '680px' }}>
          <div className='absolute' style={{ left: '55px', top: '45px', width: '375px', height: '228px' }}>
            <img
              src='/images/our-mission-19.jpg'
              className='absolute object-cover rounded-xl'
              style={{ left: '3px', top: '55px', width: '292px', height: '173px' }}
              alt=''
            />
            <img
              src='/images/our-mission-20.jpg'
              className='absolute object-cover rounded-xl'
              style={{ left: '100px', top: '15px', width: '262px', height: '147px' }}
              alt=''
            />
          </div>

          <div className='absolute' style={{ right: '45px', bottom: '15px', width: '364px', height: '256px' }}>
            <div className='absolute rounded-[16px] bg-white rotate-3' style={{ inset: '0' }} />
            <img
              src='/images/our-mission-18.jpg'
              className='absolute object-cover rounded-[12px]'
              style={{ left: '4px', top: '4px', width: '357px', height: '251px' }}
              alt=''
            />
          </div>

          <div className='relative z-10 flex flex-col items-center justify-center text-center px-6 py-20' style={{ minHeight: '680px' }}>
            <h2 className='font-playfair text-5xl font-bold text-white leading-tight mb-6' style={{ maxWidth: '369px' }}>
              Guided by Trust,
              <br />
              Not Trends
            </h2>
            <p className='font-poppins text-white/80 text-lg leading-relaxed mb-8' style={{ maxWidth: '700px' }}>
              Our recommendations are built on thoughtful consideration, not algorithms alone. We aim to provide
              insight you can rely on — so when you choose something from here, you can feel confident in your
              decision.
            </p>
            <Link
              href='/contact'
              className='inline-flex items-center gap-2 bg-white text-[#1e1716] rounded-full px-6 py-3 text-sm font-semibold hover:bg-[#f6f6f6] transition'
            >
              Contact Us →
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
