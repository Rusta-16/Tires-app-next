'use server'
import { revalidatePath } from "next/cache"
import { prisma } from "./prisma"

export async function createItemTies(formData) {
    
    const tire = await prisma.tires.create({
        data:{
            width: Number(formData.get('width')),
            height: Number(formData.get('height')),
            radius: Number(formData.get('radius'))
        }
    })
    revalidatePath('/tires')

}
