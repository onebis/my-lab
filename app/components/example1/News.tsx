import { Card, CardBody, CardFooter, CardHeader } from '@nextui-org/card'
import { Zen_Kaku_Gothic_New } from 'next/font/google'
import Image from 'next/image'

const Zen_Kaku_Gothic = Zen_Kaku_Gothic_New({ subsets: ['latin'], weight: '400' })
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

export default function News() {
  return (
    <div className='flex h-1/2 w-full flex-col bg-gray-300/30 p-3'>
      <div className='mx-auto max-w-5xl'>
        <p className='py-10 text-center text-4xl'>News</p>
        <div className='flex justify-between'>
          {contents.map((content) => {
            return (
              <Card key={content.id} className='border-none bg-transparent shadow-none'>
                <CardHeader className='flex-col items-start px-4 pb-0 pt-2 '>
                  <Image
                    alt='Card background'
                    className='object-cover'
                    src={content.image}
                    // height={250}
                    width={250}
                  />
                </CardHeader>
                <CardBody className='mb-0 flex flex-row overflow-visible py-2'>
                  {content.isNew ? (
                    <div className='inline bg-red-400 px-2 py-1 text-white'>New</div>
                  ) : null}
                  <p className='ml-1 p-1'>{content.date}</p>
                </CardBody>
                <CardFooter className={Zen_Kaku_Gothic.className + ` pt-0`}>
                  <p className='text-sm font-semibold'>{content.text}</p>
                </CardFooter>
              </Card>
            )
          })}
        </div>
      </div>
    </div>
  )
}
