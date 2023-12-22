import type { Metadata } from 'next'
import { Playfair } from 'next/font/google'

const playfair = Playfair({ subsets: ['latin'], weight: '400' })

export const metadata: Metadata = {
  title: 'example1',
  description: 'サイト例1',
}

export default function Example1Layout({ children }: { children: React.ReactNode }) {
  return <body className={playfair.className}>{children}</body>
}
