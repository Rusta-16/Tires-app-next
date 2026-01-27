'use client'

import { createItemTires } from "../lib/serverActions"

export default function AddTiresModule() {

  return (
    <div>
      <form className='flex flex-col gap-y-4 max-w-md mx-auto mt-15' action={createItemTires}>
        <input type="number" name='width' placeholder='Ширина' defaultValue='160' min='155' max='285' step='5'/>
        <input type="number" name='height' placeholder='Высота' defaultValue='65' min='40' max='80' step='5'/>
        <input type="number" name='radius' placeholder='Радиус' defaultValue='15' min='13' max='23' />
        <div className="flex flex-row justify-between">
          <input type="number" name="quantity" placeholder="Количестов" min='1'/>
          <input type="number" name="price" placeholder="Цена" min='0'/>
        </div>
        <button className="border-2 border-amber-400 rounded-2xl text-[#cccccc] py-2 hover:bg-amber-500 transition-colors text-lg hover:text-white leading-none font-mono">
          Добавить
        </button>
      </form>
    </div>
  )
}
