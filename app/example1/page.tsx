'use client'
import { NextUIProvider } from '@nextui-org/react'
import Carousel from '@/app/components/example1/ Carousel'
import { Header } from '@/app/components/example1/Header'

export default function Index() {
  return (
    <NextUIProvider>
      <main className='flex min-h-screen w-full flex-col'>
        <Header />
        <Carousel />
      </main>
    </NextUIProvider>
  )
}
