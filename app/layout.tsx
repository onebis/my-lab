import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'

const inter = Poppins({ subsets: ['latin'], weight: '400' })

export const metadata: Metadata = {
  title: 'My Portfolio',
  description: '私のポートフォリオサイト',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='ja'>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
