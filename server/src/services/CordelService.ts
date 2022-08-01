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