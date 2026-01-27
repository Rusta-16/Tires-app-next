'use client'
import React from 'react'
import { sellItemTires } from '../lib/serverActions'

export default function SellButton({ id }) {
  return (
    <div>
      <button className='flex w-auto p-3 rounded-full border-2 border-green-700 text-[#cccccc]
       hover:bg-green-800 transition-colors hover:text-white text-lg leading-none font-mono'
        onClick={() => sellItemTires(id)}>
        Продать
      </button>
    </div>
  )
}
