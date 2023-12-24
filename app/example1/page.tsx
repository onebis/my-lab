'use client'
import { NextUIProvider } from '@nextui-org/react'
import Carousel from '@/app/components/example1/Carousel'
import Footer from '@/app/components/example1/Footer'
import { Header } from '@/app/components/example1/Header'
import MainContent from '@/app/components/example1/MainContent'
import News from '@/app/components/example1/News'
import Products from '@/app/components/example1/Products'
import SNS from '@/app/components/example1/SNS'

export default function Index() {
  return (
    <NextUIProvider>
      <main className='flex min-h-screen w-full flex-col items-center text-base'>
        <Header />
        <Carousel />
        <MainContent />
        <News />
        <Products />
        <Footer />
        <SNS />
      </main>
    </NextUIProvider>
  )
}
