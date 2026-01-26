import prisma from "../lib/prisma"

export default async function TiresTable() {

    const tires = await prisma.tires.findMany()

    return (
        <div>
            <h3>Список шин</h3>
            {tires.map((tire) => (
                <div className='p-5 rounded-lg bg-gray-500 text-amber-50 flex-col gap-y-3' key={tire.id}>
                    <p>Ширина: {tire.width}</p>
                    <p>Высота: {tire.height}</p>
                    <p>Радиус: {tire.radius}</p>
                </div>
            ))}
        </div>
    )
}
