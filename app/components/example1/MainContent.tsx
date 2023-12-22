import { Button } from '@nextui-org/button'
import { Zen_Kaku_Gothic_New } from 'next/font/google'

const Zen_Kaku_Gothic = Zen_Kaku_Gothic_New({ subsets: ['latin'], weight: '400' })

export default function MainContent() {
  return (
    <div className='mt-8 flex justify-center p-3'>
      <div className={Zen_Kaku_Gothic.className + ` flex flex-col`}>
        <h1 className={` text-3xl font-bold`}>もっと明日は好きになる</h1>
        <div className='mt-10 space-y-3 text-center'>
          <p>拭いて、洗って、乾かして。</p>
          <p>使い込むほど、ふっくらと。</p>
          <p>それが、育てるタオルです。</p>
        </div>
        <div className='mt-8 min-h-44 bg-gray-300/80 text-center'>Logo</div>
        <Button radius={'sm'} className='my-3 bg-amber-100/50 px-5 py-8'>
          育てるタオルをもっと知りたい
        </Button>
        <Button radius={'sm'} className='my-3 bg-amber-100/50 px-5 py-8'>
          お買い物をはじめる
        </Button>
        <Button radius={'sm'} className='my-3 bg-amber-100/50 px-5 py-8'>
          お店を探す
        </Button>
      </div>
    </div>
  )
}
