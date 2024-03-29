import { Button } from '@nextui-org/button'
import Image from 'next/image'

export default function MainContent() {
  return (
    <div className='mt-8 flex justify-center p-3'>
      <div className='flex flex-col'>
        <h1 className={`font-gothic text-3xl font-bold`}>気持ちのいいひとときを</h1>
        <div className='mt-10 space-y-3 text-center font-gothic'>
          <p>触れて、さわって、感じて。</p>
          <p>泡が、あなたをつつむ。</p>
          <p>それが、あたらしいせっけんです。</p>
        </div>
        <Image src={'/images/Logo.png'} alt={'logo image'} width={330} height={176} />
        <Button radius={'sm'} className='my-3 bg-amber-100/50 px-5 py-8 font-gothic'>
          もっと知りたい
        </Button>
        <Button radius={'sm'} className='my-3 bg-amber-100/50 px-5 py-8 font-gothic'>
          お買い物をはじめる
        </Button>
        <Button radius={'sm'} className='my-3 bg-amber-100/50 px-5 py-8 font-gothic'>
          お店を探す
        </Button>
      </div>
    </div>
  )
}
