'use client'
import React, { useState } from 'react'
import { deleteItemTires } from '../lib/serverActions'

export default function DeleteButton({ id }) {

    const [showConfirm, setShowConfirm] = useState(false)


    function showWindowConfirm() {
        setShowConfirm(true)
    }

    function agreeConfirm() {
        cancelConfirm()
        deleteItemTires(id)
    }

    function cancelConfirm() {
        setShowConfirm(false)
    }



    return (
        <div>
            <button
                className='flex  items-center justify-center w-9 h-9 rounded-full  border-2 border-red-500
             text-[#cccccc] hover:bg-red-600 transition-colors hover:text-white text-lg leading-none font-mono'
                onClick={showWindowConfirm}>
                ×
            </button>
            {showConfirm && (
                <div className='absolute inset-0'>
                    <div className='flex flex-col p-6 rounded-xl border-0 bg-gray-900 text-2xl text-amber-300 h-full w-full justify-center text-center'>
                        <h3>Вы действительно хотите удалить это колесо?</h3>
                        <div className='flex flex-row justify-between mt-3.5'>
                            <button className='flex  items-center justify-center min-w-35 h-9 rounded-full  border-2 border-green-700
             text-[#cccccc] hover:bg-green-800 transition-colors hover:text-white text-lg leading-none font-mono' onClick={agreeConfirm}>
                                Да
                            </button>
                            <button className='flex  items-center justify-center min-w-35 h-9 rounded-full  border-2 border-red-500
             text-[#cccccc] hover:bg-red-600 transition-colors hover:text-white text-lg leading-none font-mono' onClick={cancelConfirm}>
                                Нет
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>

    )
}
