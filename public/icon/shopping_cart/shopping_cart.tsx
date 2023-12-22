import Image from 'next/image'

export function ShoppingCart({ width, height }: { width: number; height: number }) {
  return (
    <div>
      <Image
        src='/icon/shopping_cart/shopping_cart.svg'
        alt='acctount svg'
        width={width}
        height={height}
      />
    </div>
  )
}
