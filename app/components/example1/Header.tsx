import { Button } from '@nextui-org/button'
import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from '@nextui-org/navbar'
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
  return (
    <Navbar position={'sticky'} className='flex w-full justify-center'>
      <NavbarContent>
        <div className='w-auto text-center'>Logo</div>
      </NavbarContent>
      <NavbarContent className='font-playfair space-x-5 uppercase'>
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
      </NavbarContent>
    </Navbar>
  )
}
