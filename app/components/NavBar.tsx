'use client';
import { 
  Navbar, NavbarBrand, NavbarContent, 
  NavbarMenuToggle, NavbarItem, Link, NavbarMenu,
} from '@nextui-org/react'
import { useState } from 'react';
import { ThemeSwitcher } from './ThemeSwitcher';

interface menuItems {
  [key: string]: string;
}

export function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const menuItems = {
    'Projects': '/projects',
    'Contact': '/contact',
    'About the Website': '/about',
  }
  
  return (
      <Navbar onMenuOpenChange={setMenuOpen}>
        <NavbarContent>
          <NavbarMenuToggle
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            className='sm:hidden'
          />
          <Link color='foreground' className='font-medium' href="/">
            <NavbarBrand className='text-lg'>Le Zhang</NavbarBrand>
          </Link>
        </NavbarContent>
        <NavbarContent className='hidden sm:flex gap-10' justify='center'>
          {Object.keys(menuItems).map((name: string) => (
            <NavbarItem key={name}>
              <Link color='foreground' href={menuItems[name as keyof typeof menuItems]}>{name}</Link>
            </NavbarItem>
          ))}
          <ThemeSwitcher/>
        </NavbarContent>

        <NavbarMenu>
          {Object.keys(menuItems).map((name: string) => (
            <NavbarItem key={name}>
              <Link color='foreground' href={menuItems[name as keyof typeof menuItems]}>{name}</Link>
            </NavbarItem>
          ))}
        </NavbarMenu>
      </Navbar>
  )
}
