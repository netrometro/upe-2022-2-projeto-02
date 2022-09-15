import { UsuariosRepository } from "../repositories/usuarios-repository";

interface FindUserRequest {
    id: string,
    senha: string,
}

export class FindUser {
    constructor (
        private usuariosRepository: UsuariosRepository,
    ) {};

    async execute (request: FindUserRequest) {
        const {id, senha} = request;

        const result = await this.usuariosRepository.get({
           id,
           senha
        });

        return result;
    }
}