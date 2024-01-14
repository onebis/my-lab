import { Button } from '@nextui-org/button'
import { Navbar, NavbarContent, NavbarItem } from '@nextui-org/navbar'
import { NavbarMenu, NavbarMenuItem, Link, NavbarMenuToggle } from '@nextui-org/react'
import React from 'react'
import classes from '@/app/components/example1/example1.module.css'
import { Account } from '@/public/icon/account/Account'
import { MagnifyingGlass } from '@/public/icon/magnifying-glass/magnifying-glass'
import { ShoppingCart } from '@/public/icon/shopping_cart/shopping_cart'

const header_lists = [
  {
    title: 'home',
    url: '#',
  },
  {
    title: 'about',
    url: '#',
  },
  {
    title: 'products',
    url: '#',
  },
  {
    title: 'shop',
    url: '#',
  },
  {
    title: 'service',
    url: '#',
  },
  {
    title: 'faq',
    url: '#',
  },
  {
    title: 'contact',
    url: '#',
  },
]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)
  return (
    <Navbar
      maxWidth={'lg'}
      position={'sticky'}
      onMenuOpenChange={setIsMenuOpen}
      className='flex w-full justify-center px-0'
    >
      <NavbarContent justify={'start'}>
        <div className='w-auto text-center'>Logo</div>
      </NavbarContent>
      <NavbarContent className='hidden space-x-5 font-playfair uppercase md:flex'>
        {header_lists.map((item) => {
          return (
            <NavbarItem key={item.title} className='sm:text-sm lg:text-base'>
              <a className={classes.header_item + ' pb-1'} href={item.url}>
                {item.title}
              </a>
            </NavbarItem>
          )
        })}
      </NavbarContent>
      <NavbarContent justify={'end'} className='gap-0.5'>
        <NavbarItem>
          <Button isIconOnly className='bg-transparent'>
            <MagnifyingGlass width={20} height={20} />
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button isIconOnly className='bg-transparent'>
            <Account width={20} height={20} />
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button isIconOnly className='bg-transparent'>
            <ShoppingCart width={20} height={20} />
          </Button>
        </NavbarItem>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className='sm:hidden'
        />
      </NavbarContent>

      <NavbarMenu>
        {header_lists.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link className='w-full' href='#' size='lg'>
              {item.title}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  )
}
