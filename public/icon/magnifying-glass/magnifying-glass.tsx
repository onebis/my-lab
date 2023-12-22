import Image from 'next/image'

export function MagnifyingGlass({ width, height }: { width: number; height: number }) {
  return (
    <div>
      <Image
        src='/icon/magnifying-glass/magnifying-glass.svg'
        alt='acctount svg'
        width={width}
        height={height}
      />
    </div>
  )
}
