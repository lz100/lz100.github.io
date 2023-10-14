'use client';
import { 
  Navbar, NavbarBrand, NavbarContent, 
  NavbarMenuToggle, NavbarItem, Link, NavbarMenu,
  Switch, useSwitch, VisuallyHidden, SwitchProps
} from '@nextui-org/react'
import { useState, useEffect } from 'react';
// import { useTheme } from 'next-themes';
// import {MoonIcon} from "../public/MoonIcon";
// import {SunIcon} from "../public/SunIcon";
import { ThemeSwitcher } from './components/ThemeSwitcher';

interface MenuItem {
  [key: string]: string;
}
export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false)
  const menuItems = {
    'About': '/about',
    'Projects': '/projects',
    'Contact': '/contact',
  }
  // for theme switch
  // const { theme, setTheme } = useTheme();
  // const [mounted, setMounted] = useState(false);
  // useEffect(() => setMounted(true), []);
  // if(!mounted) return null;
  
  return (
    <div>
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
          {/* <Switch
              defaultSelected
              size="lg"
              color="default"
              onChange={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              startContent={<SunIcon />}
              endContent={<MoonIcon />}
          >
            {theme}
          </Switch> */}
        </NavbarContent>

        <NavbarMenu>
          {Object.keys(menuItems).map((name: string) => (
            <NavbarItem key={name}>
              <Link color='foreground' href={menuItems[name as keyof typeof menuItems]}>{name}</Link>
            </NavbarItem>
          ))}
        </NavbarMenu>
      </Navbar>
      {/* <main className=' flex flex-col items-center justify-center min-h-screen py-2'> */}
        <h1>Hello</h1>
      {/* </main> */}
    </div>
  )
}
