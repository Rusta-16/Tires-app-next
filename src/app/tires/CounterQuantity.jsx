'use client'
import React, { useState } from 'react'

export default function CounterQuantity() {

    const [quantity, setQuantity] = useState(1)

    function plusQuantity(e) {
        e.preventDefault()
        if (quantity < 50) {
            setQuantity(
                quantity + 1
            )
        }
    }

    function minusQuantity(e) {
        e.preventDefault()
        if (quantity > 0) {
            setQuantity(
                quantity - 1
            )
        }
    }

    return (
        <div className='flex flex-row justify-center items-center gap-1.5'>
            <button className='flex items-center justify-center  w-8 h-8 rounded-full  border-2 border-amber-500
                text-[#cccccc] hover:bg-amber-600 transition-colors text-lg hover:text-white leading-none font-mono' onClick={plusQuantity}>+</button>
            <span className='text-xl'>{quantity}</span>
            <button className='flex items-center justify-center  w-8 h-8 rounded-full  border-2 border-amber-500
                text-[#cccccc] hover:bg-amber-600 transition-colors text-lg hover:text-white leading-none font-mono' onClick={minusQuantity}>-</button>
        </div>
    )
}
