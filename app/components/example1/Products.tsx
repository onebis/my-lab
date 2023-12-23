import { Button } from '@nextui-org/button'

export default function Products() {
  return (
    <div className='h-1/3'>
      <p className='font-playfair p-3 text-center uppercase'>products</p>
      <Button radius={'sm'} className='font-gothic my-3 bg-amber-100/50 px-5 py-8'>
        全商品から探す
      </Button>
    </div>
  )
}
