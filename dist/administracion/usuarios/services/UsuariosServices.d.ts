import { RolesService } from './../../../catalogos/roles/services/roles.service';
import { Repository } from "typeorm";
import { Usuarios } from "../models/Usuarios";
export declare class UsuariosSevices {
    private usuariosRepository;
    private rolesPrd;
    constructor(usuariosRepository: Repository<Usuarios>, rolesPrd: RolesService);
    getAll(): Promise<Usuarios[]>;
    getById(id: number): Promise<Usuarios>;
    getUsuarioByEmpresa(idEmpresa: number): Promise<Usuarios[]>;
    getUsuarioByEmail(email: string): Promise<Usuarios>;
    guardar(usuario: Usuarios): Promise<Usuarios>;
    modificar(id: number, usuario: Usuarios): Promise<Usuarios>;
    eliminar(id: number): Promise<Usuarios>;
    eliminarMasivo(usuarios: Usuarios[]): Promise<any>;
    registrarUsuario(usuario: Usuarios): Promise<{
        resultado: boolean;
        mensaje: string;
    }>;
}
