'use client'
import React, { useState } from 'react'
import { sellItemTires } from '../lib/serverActions'

export default function SellButton({ id }) {

  const [showConfirm, setShowConfirm] = useState(false)


  function showWindowConfirm() {
    setShowConfirm(true)
  }

  function agreeConfirm() {
    cancelConfirm()
    sellItemTires(id)
  }

  function cancelConfirm() {
    setShowConfirm(false)
  }

  return (
    <div>
      <button className='flex w-auto p-3 rounded-full border-2 border-green-700 text-[#cccccc]
       hover:bg-green-800 transition-colors hover:text-white text-lg leading-none font-mono'
        onClick={showWindowConfirm}>
        Продать
      </button>
      {showConfirm && (
        <div className='absolute inset-0'>
          <div className='flex flex-col p-6 rounded-xl border-0 bg-gray-900 text-2xl text-amber-300 h-full w-full justify-center text-center'>
            <h3>Вы уверены, что хотите продать это колесо?</h3>
            <div className='flex flex-row justify-between mt-3.5'>
              <button className='flex  items-center justify-center min-w-35 h-9 rounded-full  border-2 border-green-700
             text-[#cccccc] hover:bg-green-800 transition-colors hover:text-white text-lg leading-none font-mono' onClick={agreeConfirm}>
                Подтвердить
              </button>
              <button className='flex  items-center justify-center min-w-35 h-9 rounded-full  border-2 border-red-500
             text-[#cccccc] hover:bg-red-600 transition-colors hover:text-white text-lg leading-none font-mono' onClick={cancelConfirm}>
                Отмена
              </button>
            </div>
          </div>
        </div>
      )}
    </div>

  )
}
