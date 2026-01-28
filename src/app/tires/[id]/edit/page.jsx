import TiresTable from '@/app/components/TiresTable'
import HeaderForTires from '@/app/components/ui/HeaderForTires'
import { prisma } from '@/app/lib/prisma'
import { editItemTire } from '@/app/lib/serverActions'
import React from 'react'

export default async function EditTirePage({ params }) {

    const { id } = await params
    const tire = await prisma.tires.findUnique({
        where: {
            id: Number(id)
        }
    })

    const EditTireWhithId = editItemTire.bind(null, tire.id)

    return (
        <div>
            <HeaderForTires />
            <form className='flex flex-col gap-y-4 max-w-md mx-auto mt-15' action={EditTireWhithId}>
                <input type="number" name='width' placeholder='Ширина' defaultValue={tire.width} min='155' max='285' step='5' />
                <input type="number" name='height' placeholder='Высота' defaultValue={tire.height} min='40' max='80' step='5' />
                <input type="number" name='radius' placeholder='Радиус' defaultValue={tire.radius} min='13' max='23' />
                <div className="flex flex-row justify-between">
                    <input type="number" name="quantity" defaultValue={tire.quantity} placeholder="Количестов" min='1' />
                    <input type="number" name="price" defaultValue={tire.price} placeholder="Цена" min='0' />
                </div>
                <button className="border-2 border-amber-400 rounded-2xl text-[#cccccc] py-2
                 hover:bg-amber-500 transition-colors text-lg hover:text-white leading-none font-mono">Изменить</button>
            </form>
            {
                <div className='p-9 rounded-xl border-2 border-gray-500 bg-gray-900 text-2xl text-amber-300 max-w-max flex flex-col mt-5 m-auto' key={tire.id}>
                    <div className="flex flex-col self-center justify-center" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
                        <div className="w-full max-w-96 text-left text-[#CDDEEE] text-3xl">
                            <p>Ширина: {tire.width}</p>
                            <p>Высота: {tire.height}</p>
                            <p>Радиус: {tire.radius}</p>
                            <p>Кол-во: {tire.quantity} шт</p>
                            <p>Цена: {tire.price} ₽</p>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}
