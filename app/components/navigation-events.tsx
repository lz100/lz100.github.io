'use client'
 
import { useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'

export function NavigationEvents() {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  console.log(pathname)
  useEffect(() => {
    const url = `${pathname}?${searchParams}`
   
    // You can now use the current URL
    // ...
  }, [pathname, searchParams])
 
  return null
}