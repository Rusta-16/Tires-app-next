'use client'
import React from 'react'
import { deleteItemTires } from '../lib/serverActions'

export default function DeleteButton({ id }) {
    return (
        <button
            className='flex  items-center justify-center w-9 h-9 rounded-full  border-2 border-red-500
             text-[#cccccc] hover:bg-red-600 transition-colors hover:text-white text-lg leading-none font-mono'
            onClick={() => deleteItemTires(id)}>
                ×
        </button>
    )
}
