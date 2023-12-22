import { Button } from '@nextui-org/button'
import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from '@nextui-org/navbar'
import { Account } from '@/public/icon/account/Account'
import { MagnifyingGlass } from '@/public/icon/magnifying-glass/magnifying-glass'
import { ShoppingCart } from '@/public/icon/shopping_cart/shopping_cart'

export function Header() {
  return (
    // <header className=' flex h-1/6 w-full px-5'>
    <Navbar position={'sticky'} className='flex w-full justify-center'>
      <NavbarContent>
        <div className='w-auto text-center'>Logo</div>
      </NavbarContent>
      <NavbarContent className='space-x-5 uppercase'>
        <NavbarItem className='sm:text-sm lg:text-base'>
          <a href={'#'}>home</a>
        </NavbarItem>
        <NavbarItem className='sm:text-sm lg:text-base'>
          <a href={'#'}>about</a>
        </NavbarItem>
        <NavbarItem className='sm:text-sm lg:text-base'>
          <a href={'#'}>products</a>
        </NavbarItem>
        <NavbarItem className='sm:text-sm lg:text-base'>
          <a href={'#'}>shop</a>
        </NavbarItem>
        <NavbarItem className='sm:text-sm lg:text-base'>
          <a href={'#'}>service</a>
        </NavbarItem>
        <NavbarItem className='sm:text-sm lg:text-base'>
          <a href={'#'}>faq</a>
        </NavbarItem>
        <NavbarItem className='sm:text-sm lg:text-base'>
          <a href={'#'}>contact</a>
        </NavbarItem>
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
      </NavbarContent>
    </Navbar>
    // </header>
  )
}
