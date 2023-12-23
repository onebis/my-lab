import type { Metadata } from 'next'
import { Playfair, ZenKakuGothicNew } from '@/app/components/example1/font'

export const metadata: Metadata = {
  title: 'example1',
  description: 'サイト例1',
}

export default function Example1Layout({ children }: { children: React.ReactNode }) {
  return <body className={`${Playfair.variable} ${ZenKakuGothicNew.variable}`}>{children}</body>
}
