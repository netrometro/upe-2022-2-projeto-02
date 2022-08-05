import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express-serve-static-core";

const prisma = new PrismaClient();

export const createUsuario = async (req: Request, res: Response) => {  // Probably it'll be modified
    const result = await prisma.usuario.create({
        data: {
            ...req.body
        }
    })
    console.log(result)
    return res.json(result)
}

export const findAllUsuarios = async (res: Response) => {
    const usuarios = await prisma.usuario.findMany()
    console.log(usuarios)
    return res.json(usuarios)
}

export const findUsuarioByEmail = async (req: Request, res: Response) => {
    const user = await prisma.usuario.findUnique({
        where : {
            email: req.body.email
        }
    })
    console.log(user)
    return res.json(user)
}