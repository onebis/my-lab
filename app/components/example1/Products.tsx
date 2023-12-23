import { Button } from '@nextui-org/button'
import Image from 'next/image'
import React from 'react'

import image3 from '@/public/images/image3.jpg'

export default function Products() {
  return (
    <div>
      <div className='mt-20 flex h-1/3 flex-col items-center'>
        <p className='font-playfair pb-10 text-center text-4xl uppercase'>products</p>
        <Button radius={'sm'} className='font-gothic  my-3 w-80 bg-amber-100/50 py-8'>
          全商品から探す
        </Button>
      </div>
      <div className='flex max-w-5xl flex-col items-start p-4'>
        <p className='uppercase'>special</p>
        <div className='flex w-full justify-between gap-4'>
          <div className='flex-grow'>
            <Image alt='Card background' className='w-full object-cover' src={image3} width={300} />
          </div>
          <div className='flex-grow'>
            <Image alt='Card background' className='w-full object-cover' src={image3} width={300} />
          </div>
          <div className='flex-grow'>
            <Image alt='Card background' className='w-full object-cover' src={image3} width={300} />
          </div>
        </div>
      </div>
    </div>
  )
}
