'use server'
import { revalidatePath } from "next/cache"
import { prisma } from "./prisma"
import { redirect } from "next/navigation"

export async function createItemTires(formData) {

    const data = {
        width: Number(formData.get('width')),
        height: Number(formData.get('height')),
        radius: Number(formData.get('radius')),
        price: Number(formData.get('price')),
        quantity: Number(formData.get('quantity'))
    }
    if (data.quantity != 0 && data.price != 0 && data.radius != 0 && data.height != 0 && data.width !=0){
        const tire = await prisma.tires.create({data})
    }
    revalidatePath('/tires/all')

}

export async function sellItemTires(id) {

    const tire = await prisma.tires.findUnique({
        where: {
            id: Number(id)
        }
    })

    const sellTire = await prisma.sellTires.create({
        data: {
            width: tire.width,
            height: tire.height,
            radius: tire.radius,
            price: tire.price,
            quantity: tire.quantity
        }
    })
    const tireForSold = await prisma.tires.delete({
        where: {
            id: Number(id)
        }
    })
    revalidatePath('/tires/all')
    revalidatePath('/tires/sellout')
}

export async function deleteItemTires(id) {

    const tire = await prisma.tires.delete({
        where: {
            id: Number(id)
        }
    })
    revalidatePath('/tires/all')
}

export async function editItemTire(id, formData) {

    const tire = await prisma.tires.update({
        data: {
            width: Number(formData.get('width')),
            height: Number(formData.get('height')),
            radius: Number(formData.get('radius')),
            price: Number(formData.get('price')),
            quantity: Number(formData.get('quantity'))
        },
        where: {
            id: Number(id)
        }
    })
    redirect('/tires/all')
}