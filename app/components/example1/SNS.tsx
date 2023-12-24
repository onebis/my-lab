import Image from 'next/image'
import facebook from '@/public/icon/facebook.svg'
import follow_us from '@/public/icon/follow_us_rotated.svg'
import instagram from '@/public/icon/instagram.svg'
import line from '@/public/icon/line.svg'

export default function SNS() {
  return (
    <div className='fixed right-3 top-1/3 z-10 h-1/2'>
      <ul className='flex flex-col items-center gap-4'>
        <li className=''>
          <a href='#'>
            <Image src={follow_us} alt={'follow_us'} width={30} />
          </a>
        </li>
        <li>
          <a href='#'>
            <Image src={instagram} alt={'instagram'} width={30} />
          </a>
        </li>
        <li>
          <a href='#'>
            <Image src={facebook} alt={'facebook'} width={30} />
          </a>
        </li>
        <li>
          <a href='#'>
            <Image src={line} alt={'line'} width={30} />
          </a>
        </li>
        <li className='h-44 border-[1px] border-yellow-200'></li>
      </ul>
    </div>
  )
}
