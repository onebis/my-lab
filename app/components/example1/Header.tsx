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

const neuton = Neuton({ subsets: ['latin'], weight: '400' })

export function Header() {
  return (
    <header className='flex h-1/6 w-full max-w-7xl justify-around px-5 '>
      <Navbar>
        <NavbarBrand>
          <div className='mr-10'>Logo</div>
        </NavbarBrand>
        <NavbarContent className='space-x-5 uppercase'>
          <NavbarItem>home</NavbarItem>
          <NavbarItem>about</NavbarItem>
          <NavbarItem>products</NavbarItem>
          <NavbarItem>shop</NavbarItem>
          <NavbarItem>service</NavbarItem>
          <NavbarItem>faq</NavbarItem>
          <NavbarItem>service</NavbarItem>
          <NavbarItem>contact</NavbarItem>
        </NavbarContent>
        <NavbarContent justify={'end'}>
          <NavbarItem>icons</NavbarItem>
        </NavbarContent>
      </Navbar>
    </header>
  )
}
