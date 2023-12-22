import Image from 'next/image'

export function Account({ width, height }: { width: number; height: number }) {
  return (
    <div>
      <Image src='/icon/account/account.svg' alt='acctount svg' width={width} height={height} />
    </div>
  )
}
