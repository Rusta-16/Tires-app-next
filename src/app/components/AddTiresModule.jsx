'use client'

import { createItemTies } from "../lib/serverActions"

export default function AddTiresModule() {

  return (
    <div>
      <form className='flex flex-col gap-y-4 max-w-md mx-auto mt-8' action={createItemTies}>
        <input type="number" name='width' placeholder='Ширина'/>
        <input type="number" name='height' placeholder='Высота'/>
        <input type="number" name='radius' placeholder='Радиус'/>
        <button>Добавить</button>
      </form>
    </div>
  )
}
