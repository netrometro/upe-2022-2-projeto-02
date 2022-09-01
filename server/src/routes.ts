import express from "express";
import { prisma } from "./prisma";
import { PrismaUsuariosRepository } from "./repositories/prisma/prisma-usuarios-repository";
import { FindUser } from "./services/find_user";
import { SubmitNewUser } from "./services/submit_new_user";

export const routes = express.Router()

routes.post('/usuario', async (req, res) => {
    const { nome, email, senha} = req.body;
  
    const prismaUsuariosRepository = new PrismaUsuariosRepository();
    const submitNewUser = new SubmitNewUser (
      prismaUsuariosRepository
    )
  
    await submitNewUser.execute({
      nome,
      email,
      senha,
    });

    return res.status(201).send()
})

routes.get('/get/usuario',async (req, res) => {
    const { id, senha } = req.body;
    
    const prismaUsuariosRepository = new PrismaUsuariosRepository();
    const findUser = new FindUser(
        prismaUsuariosRepository
    );

    const result = await findUser.execute({
        id,
        senha,
    });

    return res.status(200).json({ data: result });
})

routes.get('/usuarios', async (req, res) => {
    
})

routes.get('/usuario/cordeis', async (req, res) => {
    
})
