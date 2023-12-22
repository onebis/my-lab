'use client'
import { NextUIProvider } from '@nextui-org/react'
import { Header } from '@/app/components/example1/Header'

export default function Index() {
  return (
    <NextUIProvider>
      <main className='flex min-h-screen w-full justify-center '>
        <Header />
        <div></div>
      </main>
    </NextUIProvider>
  )
}
