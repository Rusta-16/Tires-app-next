import React from 'react'

import AddTiresModule from '@/app/components/AddTiresModule'
import TiresTable from '@/app/components/TiresTable'
import HeaderForTires from '@/app/components/ui/HeaderForTires'

export default function Tirespage() {
  return (
    <div>
      <HeaderForTires />
      <AddTiresModule />
      <TiresTable />
    </div>
    
  )
}
