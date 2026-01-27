import Link from 'next/link'
import React from 'react'

export default function EditButton({id}) {
    return (
        <div>
            <Link href={`/tires/${id}/edit`}>
                <button className='flex items-center justify-center  w-9 h-9 rounded-full  border-2 border-amber-500
                text-[#cccccc] hover:bg-amber-600 transition-colors text-lg hover:text-white leading-none font-mono'>
                    ✎
                </button>
            </Link>
        </div>
    )
}
