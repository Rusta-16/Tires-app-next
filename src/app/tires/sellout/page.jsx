import HeaderForTires from '@/app/components/ui/HeaderForTires'
import { prisma } from '@/app/lib/prisma'
import React from 'react'

export default async function SellTiresPage() {
    const sellTires = await prisma.sellTires.findMany()
    return (
        <div className='flex flex-col mt-5'>
            <HeaderForTires />
            <div className="grid grid-cols-4 gap-y-5">
                {
                    sellTires.map((sellTire) => (
                        <div className='p-6 rounded-xl border-2 border-gray-500 bg-gray-900 text-2xl text-amber-300 min-w-90 flex flex-col mt-5 m-auto' key={sellTire.id}>
                            <div className="flex flex-col self-center justify-center" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
                                <div className="w-full max-w-96 text-left text-[#CDDEEE] text-3xl">
                                    <p>Ширина: {sellTire.width}</p>
                                    <p>Высота: {sellTire.height}</p>
                                    <p>Радиус: {sellTire.radius}</p>
                                    <p>Кол-во: {sellTire.quantity} шт</p>
                                    <p className='text-red-400'>Цена: {sellTire.price} ₽</p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
