import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express-serve-static-core";

const prisma = new PrismaClient();

export const createCordel = async (req: Request, res: Response) => {
    const result = await prisma.cordel.create({
        data: {
            ...req.body
        }
    })
    console.log(result)
    return res.json(result)
}

export const updateCordel = async (req: Request, res: Response) => {
    const { titulo, autor } = req.body
    const result = await prisma.cordel.update({
        where: {
            id: +req.params.id
        },
        data: {
            ...req.body
        }
    })
    return res.json(result)
    
    const cordeis = await prisma.cordel.findMany()
    console.log(cordeis)
    return res.json(cordeis)
}

export const findAllCordeis = async (res: Response) => {
    const cordeis = await prisma.cordel.findMany()
    console.log(cordeis)
    return res.json(cordeis)
}

export const findCordelByTitulo = async (req: Request, res: Response) => {
    const cordel = await prisma.cordel.findUnique({
        where : {
            titulo: req.body.titulo
        }
    })
    console.log(cordel)
    return res.json(cordel)
}

export const deleteCordelById = async (req: Request, res: Response) => {
    const deleteCordel = await prisma.cordel.delete({
        where : {
            id: req.body.id
        }
    })

    if (!deleteCordel) {
        return res.status(404).json({
            message: 'Cordel não encontrado'
        })
    }

    console.log(deleteCordel)
    return res.json(deleteCordel)
}