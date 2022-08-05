import { prisma } from "../../prisma";
import { UsuarioCreate, UsuarioDelete, UsuariosRepository } from "../usuarios-repository";

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
    }
}