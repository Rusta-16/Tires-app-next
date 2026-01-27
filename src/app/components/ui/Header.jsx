import React from 'react'
import Link from 'next/link'

export default function Header() {
  return (
    <div className='navigation'>
        <h3>Service at Sergo's</h3>
        <nav className='flex gap-7 mx-auto'>
            <Link href={'/'} className='nav-link'>Главная</Link>
            <Link href={'/about'} className='nav-link'>О нас</Link>
            <Link href={'/tires/all'} className='nav-link'>Колёса</Link>
        </nav>
        <Link href={'/logOut'} className='nav-link'>Логин</Link>
    </div>
  )
}
