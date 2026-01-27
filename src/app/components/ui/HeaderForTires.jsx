import Link from 'next/link'
import React from 'react'

export default function HeaderForTires() {
  return (
    <div className='navigation'>
        <Link href={'/'} className='nav-link'>Главная</Link>
        <Link href={'/tires/all'} className='nav-link'>Все колёса</Link>
        <Link href={'/tires/sellout'} className='nav-link'>Проданные</Link>
    </div>
  )
}
