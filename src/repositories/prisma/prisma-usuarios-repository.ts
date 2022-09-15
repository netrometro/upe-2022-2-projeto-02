import { prisma } from "../../prisma";
import { UsuarioCreate, UsuarioDelete, UsuarioGet, UsuarioGetAll, UsuariosRepository } from "../usuarios-repository";

export class PrismaUsuariosRepository implements UsuariosRepository {
    async create({nome, email, senha}: UsuarioCreate) {
        await prisma.usuario.create({
            data: {
                nome,
                email,
                senha,
            }
        })
    };

    async delete({id, senha}: UsuarioDelete) {
        await prisma.usuario.delete({
            where: {
                id: id
            }
        })
    };

    async get({id, senha}: UsuarioGet) {
        const result = await prisma.usuario.findUnique({
            where : {
                id: id
            },
            select: {
                nome: true,
                email: true,
            }
        })

        return result;
    };

    async get_all(data: UsuarioGetAll) {
        await prisma.usuario.findMany()
    };
}