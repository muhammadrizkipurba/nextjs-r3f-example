import React from 'react'
import { Logo } from '@/components/Logo';

const Header = () => {
  return (
    <header className='flex justify-center py-4 -mb-28'>
      <Logo className='h-20 z-10 cursor-pointer text-sky-800' />
    </header>
  )
}

export default Header