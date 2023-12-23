import { Card, CardBody, CardFooter, CardHeader } from '@nextui-org/card'
import { motion, useInView } from 'framer-motion'
import { Zen_Kaku_Gothic_New } from 'next/font/google'
import Image from 'next/image'

const Zen_Kaku_Gothic = Zen_Kaku_Gothic_New({ subsets: ['latin'], weight: '400' })
import React, { useEffect, useState } from 'react'
import image3 from '@/public/images/image3.jpg'
import image4 from '@/public/images/image4.jpg'
import image5 from '@/public/images/image5.jpg'
import image6 from '@/public/images/image6.jpg'

const contents = [
  {
    id: 1,
    isNew: true,
    date: '2023.12.21',
    text: 'サイトをリニューアルしました',
    image: image3,
  },
  {
    id: 2,
    isNew: false,
    date: '2023.12.21',
    text: 'サイトをリニューアルしました',
    image: image4,
  },
  {
    id: 3,
    isNew: false,
    date: '2023.12.21',
    text: 'サイトをリニューアルしました',
    image: image5,
  },
  {
    id: 4,
    isNew: false,
    date: '2023.12.21',
    text: 'サイトをリニューアルしました',
    image: image6,
  },
]

// const variants = {
//   visible: { opacity: 1, transition: { duration: 0.5 } },
//   hidden: { opacity: 0 },
// }

const variants = {
  visible: { opacity: 1, transition: { duration: 0.5 } },
  hidden: { opacity: 0 },
}

export default function News() {
  const ref = React.useRef(null)
  const isVisible = useInView(ref)

  return (
    <div className='flex h-1/2 w-full flex-col bg-gray-300/30 p-3'>
      <motion.div
        id='my-element'
        // animate={isVisible ? 'visible' : 'hidden'}
        // variants={variants}
        initial={{ y: 60, opacity: 0 }}
        animate={isVisible ? { y: 0, opacity: 1 } : 'hidden'}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        ref={ref}
      >
        <div className='mx-auto max-w-5xl'>
          <p className='font-playfair py-10 text-center text-4xl'>News</p>
          <div className='flex justify-between'>
            {contents.map((content) => {
              return (
                <Card key={content.id} className='border-none bg-transparent shadow-none'>
                  <CardHeader className='flex-col items-start px-4 pb-0 pt-2 '>
                    <Image
                      alt='Card background'
                      className='object-cover'
                      src={content.image}
                      width={250}
                    />
                  </CardHeader>
                  <CardBody className='mb-0 flex flex-row overflow-visible py-2'>
                    {content.isNew ? (
                      <div className='inline bg-red-400 px-2 py-1 text-white'>New</div>
                    ) : null}
                    <p className='font-playfair ml-1 p-1'>{content.date}</p>
                  </CardBody>
                  <CardFooter className={Zen_Kaku_Gothic.className + ` pt-0`}>
                    <p className='font-gothic text-sm font-semibold'>{content.text}</p>
                  </CardFooter>
                </Card>
              )
            })}
          </div>
        </div>
      </motion.div>
    </div>
  )
}
