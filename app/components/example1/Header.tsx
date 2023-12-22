import { Button } from '@nextui-org/button'
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from '@nextui-org/navbar'
import { Neuton } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import { Account } from '@/public/icon/account/Account'
import { MagnifyingGlass } from '@/public/icon/magnifying-glass/magnifying-glass'
import { ShoppingCart } from '@/public/icon/shopping_cart/shopping_cart'

const neuton = Neuton({ subsets: ['latin'], weight: '400' })

export function Header() {
  return (
    <header className='flex h-1/6 w-full max-w-7xl justify-around px-5'>
      <Navbar>
        <NavbarBrand>
          <div className='mr-10'>Logo</div>
        </NavbarBrand>
        <NavbarContent className='space-x-5 uppercase'>
          <NavbarItem className='text-xs'>
            <a href={'#'}>home</a>
          </NavbarItem>
          <NavbarItem className='text-xs'>
            <a href={'#'}>about</a>
          </NavbarItem>
          <NavbarItem className='text-xs'>
            <a href={'#'}>products</a>
          </NavbarItem>
          <NavbarItem className='text-xs'>
            <a href={'#'}>shop</a>
          </NavbarItem>
          <NavbarItem className='text-xs'>
            <a href={'#'}>service</a>
          </NavbarItem>
          <NavbarItem className='text-xs'>
            <a href={'#'}>faq</a>
          </NavbarItem>
          <NavbarItem className='text-xs'>
            <a href={'#'}>contact</a>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify={'end'} className='gap-0.5'>
          <NavbarItem>
            <Button isIconOnly className='bg-white'>
              <MagnifyingGlass width={20} height={20} />
            </Button>
          </NavbarItem>
          <NavbarItem>
            <Button isIconOnly className='bg-white'>
              <Account width={20} height={20} />
            </Button>
          </NavbarItem>
          <NavbarItem>
            <Button isIconOnly className='bg-white'>
              <ShoppingCart width={20} height={20} />
            </Button>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    </header>
  )
}
