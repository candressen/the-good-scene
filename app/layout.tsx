import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'The Good Scene | The city, edited.',
    template: '%s | The Good Scene',
  },
  description: 'A curated collection of elevated social experiences in Boston. Skip the noise. Find your scene.',
  metadataBase: new URL('https://thegoodscene.com'),
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className='bg-[#f6f6f6] text-[#1e1716]'>
        <main className="min-h-screen">{children}</main>
      </body>
    </html>
  )
}
