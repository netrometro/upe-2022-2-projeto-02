import { UsuariosRepository } from "../repositories/usuarios-repository";

interface SubmitNewUserRequest {
    nome: string;
    email: string;
    senha: string;
}

export class SubmitNewUser {
// <Constructor Extendido/Expandido>
    // private usuariosRepository: UsuariosRepository

    // constructor (
    //     usuariosRepository: UsuariosRepository,
    // ) {
    //     this.usuariosRepository = usuariosRepository
    // }

    constructor (
        private usuariosRepository: UsuariosRepository,
    ) {}

    async execute (request: SubmitNewUserRequest) {
        const { nome, email, senha } = request;

        await this.usuariosRepository.create({
            nome,
            email,
            senha,
        })

// <Create Diretamente Acoplado Ao Prisma (Não ideal)>
        // const prismaUsuariosRepository = new PrismaUsuariosRepository();

        // await PrismaUsuariosRepository.create({
        //     nome,
        //     email,
        //     senha,
        // })
    }
}