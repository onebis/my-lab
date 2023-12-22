import Image from 'next/image'
import 'swiper/css'
import { useState } from 'react'
import { A11y, Autoplay, Navigation, Pagination, Keyboard } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import slide1 from '@/public/images/image1.jpg'
import slide3 from '@/public/images/image1.jpg'
import slide4 from '@/public/images/image1.jpg'
import slide5 from '@/public/images/image1.jpg'
import slide2 from '@/public/images/image2.jpg'

export default function Carousel() {
  const items = [slide1, slide2, slide3, slide4, slide5]
  const [ready, setReady] = useState(false)
  return (
    <>
      <div className='w-full py-2'>
        <Swiper
          onInit={() => setReady(true)}
          modules={[Autoplay, Pagination, Navigation, A11y, Keyboard]}
          spaceBetween={20}
          keyboard={{
            enabled: true,
          }}
          pagination={{
            clickable: true,
            el: `#swiper-pagination-1`,
            renderBullet(i, className) {
              return `<button class='${className} aria-[current]:bg-amber-200 w-2 h-2 bg-zinc-200/50 inline-block rounded-full'><span class='sr-only'>Slide to ${i}</span></button>`
            },
          }}
          slidesPerView={1.5}
          autoplay={{
            pauseOnMouseEnter: true,
          }}
          loop
          centeredSlides={true}
          className='relative'
        >
          {items.map((image, i) => (
            <SwiperSlide
              key={`slide-${i}`}
              className='relative aspect-video overflow-hidden rounded-lg border shadow'
            >
              <Image
                className='object-cover'
                fill
                src={image}
                sizes='265px'
                key={`slide-${i + 1}`}
                alt=''
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <div
          id={`swiper-pagination-1`}
          className='swiper-pagination mt-4 flex items-center justify-center gap-2 '
        />
      </div>
    </>
  )
}
