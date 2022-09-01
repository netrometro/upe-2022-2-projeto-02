export interface UsuarioCreate {
    nome: string;
    email: string;
    senha: string;
}

export interface UsuarioDelete {
    id: string;
    senha: string;
}

export interface UsuarioGet {
    id: string;
    senha: string;
}

export interface UsuarioGetAll {}

export interface UsuariosRepository {
    create: (data: UsuarioCreate) => Promise<void>;
    delete: (data: UsuarioDelete) => Promise<void>;
    get: (data: UsuarioGet) => Promise<{} | null>;
    get_all: (data: UsuarioGetAll) => Promise<void>;
}