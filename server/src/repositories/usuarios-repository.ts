export interface UsuarioCreate {
    nome: string;
    email: string;
    senha: string;
}

export interface UsuarioDelete {
    id: string;
    senha: string;
}

export interface UsuariosRepository {
    create: (data: UsuarioCreate) => Promise<void>;
    delete: (data: UsuarioDelete) => Promise<void>;
}