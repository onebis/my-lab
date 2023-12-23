import { Playfair as playfair, Zen_Kaku_Gothic_New } from 'next/font/google'

export const ZenKakuGothicNew = Zen_Kaku_Gothic_New({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-ZenKakuGothicNew',
})

export const Playfair = playfair({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-Playfair',
})
