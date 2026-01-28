import { prisma } from "../lib/prisma"
import DeleteButton from "../tires/DeleteButton"
import EditButton from "../tires/EditButton"
import SellButton from "../tires/SellButton"


export default async function TiresTable() {

    const tires = await prisma.tires.findMany()

    return (
        <div>
            <div className="grid grid-cols-4 gap-y-5">
                {tires.map((tire) => (
                    <div className='relative p-6 rounded-xl border-2 border-gray-500 bg-gray-900 text-2xl text-amber-300 min-w-90 flex flex-col mt-5 m-auto' key={tire.id}>
                        <div className="flex flex-col self-center justify-center" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
                            <div className="w-full max-w-96 text-left text-[#CDDEEE] text-3xl">
                                <p>Ширина: {tire.width}</p>
                                <p>Высота: {tire.height}</p>
                                <p>Радиус: {tire.radius}</p>
                                <p>Кол-во: {tire.quantity} шт</p>
                                <p>Цена: {tire.price} ₽</p>
                            </div>
                        </div>
                        <div className=" flex flex-row m-0 p-0 justify-between items-center mt-4">
                            <div className="flex flex-row gap-2">
                                <DeleteButton id={tire.id} />
                                <EditButton id={tire.id} />
                            </div>
                            <div className="flex flex-row">
                                <SellButton id={tire.id} />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
