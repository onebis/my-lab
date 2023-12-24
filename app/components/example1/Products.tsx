import { Button } from '@nextui-org/button'
import Image from 'next/image'
import React, { useState } from 'react'
import { A11y, Autoplay, Navigation, Pagination, Keyboard } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import image10 from '@/public/images/image10.jpg'
import image11 from '@/public/images/image11.jpg'
import image2 from '@/public/images/image2.jpg'
import image4 from '@/public/images/image4.jpg'
import image5 from '@/public/images/image5.jpg'
import image6 from '@/public/images/image6.jpg'
import image8 from '@/public/images/image8.jpg'
import image9 from '@/public/images/image9.jpg'

const new_items = [
  {
    image: image5,
    name: 'move ミニフェイスタオル ＋　ブラシ（２個セット）',
    place: '5,250円',
  },
  {
    image: image6,
    name: '乾燥肌用石鹸（６個セット）青',
    place: '5,250円',
  },
  {
    image: image11,
    name: '乾燥肌用石鹸（６個セット）赤',
    place: '5,250円',
  },
  {
    image: image10,
    name: '子供用石鹸（２個セット）赤',
    place: '1,250円',
  },
  {
    image: image2,
    name: '子供用石鹸（２個セット）赤',
    place: '1,250円',
  },
  {
    image: image4,
    name: '子供用石鹸（２個セット）赤',
    place: '1,250円',
  },
]

export default function Products() {
  const [ready, setReady] = useState(false)
  return (
    <div className='w-full max-w-5xl'>
      <div className='mt-20 pb-10 text-center font-playfair text-4xl uppercase'>products</div>
      <Button radius={'sm'} className='mx-auto my-3 flex w-80 bg-amber-100/50 py-8 font-gothic'>
        全商品から探す
      </Button>
      <p className='mb-2 mt-5 px-2 font-playfair text-2xl uppercase'>special</p>
      <div className='flex justify-center px-2'>
        <div className='w-full flex-grow'>
          <Image alt='Card background' className='object-cover' src={image9} />
        </div>
        <div className='w-full flex-grow'>
          <Image alt='Card background' className='object-cover' src={image8} />
        </div>
      </div>
      <p className='mb-2 mt-20 px-2 font-playfair text-2xl uppercase'>new items</p>
      <div className='w-full p-2'>
        <Swiper
          onInit={() => setReady(true)}
          modules={[Pagination, Navigation, A11y, Keyboard]}
          spaceBetween={30}
          keyboard={{
            enabled: true,
          }}
          pagination={{
            clickable: true,
            el: `#swiper-pagination-2`,
            renderBullet(i, className) {
              return `<button class='${className} aria-[current]:bg-amber-200 w-2 h-2 bg-zinc-200/50 inline-block rounded-full'><span class='sr-only'>Slide to ${i}</span></button>`
            },
          }}
          slidesPerView={4}
          autoplay={{
            pauseOnMouseEnter: true,
          }}
          loop
          centeredSlides={false}
          className='relative'
        >
          {new_items.map((item, i) => (
            <SwiperSlide key={`slide-${i}`} className='relative'>
              <div className='flex flex-col'>
                <Image
                  className='object-cover'
                  // fill
                  src={item.image}
                  key={`slide-${i + 1}`}
                  alt=''
                  loading='lazy'
                />
                <div className='py-1 font-gothic text-sm text-gray-600'>{item.name}</div>
                <div className='font-gothic text-sm text-gray-600'>{item.place}</div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div
          id={`swiper-pagination-2`}
          className='swiper-pagination mt-4 flex items-center justify-center gap-2 '
        />
      </div>
    </div>
  )
}
