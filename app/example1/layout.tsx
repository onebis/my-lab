import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'

const poppins = Poppins({ subsets: ['latin'], weight: '400' })

export const metadata: Metadata = {
  title: 'example1',
  description: 'サイト例1',
}

export default function Example1Layout({ children }: { children: React.ReactNode }) {
  return <body className={poppins.className}>{children}</body>
}
