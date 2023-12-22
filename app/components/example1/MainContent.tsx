import { Button } from '@nextui-org/button'

export default function MainContent() {
  return (
    <div className='mt-8 flex justify-center p-3'>
      <div className='flex flex-col'>
        <h1 className='text-3xl font-bold'>もっと明日は好きになる</h1>
        <div className='mt-10 space-y-3 text-center'>
          <p>拭いて、洗って、乾かして。</p>
          <p>使い込むほど、ふっくらと。</p>
          <p>それが、育てるタオルです。</p>
        </div>
        <div className='mt-8 min-h-44 bg-amber-100 text-center'>Logo</div>
        <Button radius={'sm'} className='my-3 bg-gray-500 px-5 py-8 text-white'>
          育てるタオルをもっと知りたい
        </Button>
        <Button radius={'sm'} className='my-3 bg-gray-500 px-5 py-8 text-white'>
          お買い物をはじめる
        </Button>

        <Button radius={'sm'} className='my-3 bg-gray-500 px-5 py-8 text-white'>
          お店を探す
        </Button>
      </div>
    </div>
  )
}
