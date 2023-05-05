import { Usuarios } from "../models/Usuarios";
import { UsuariosSevices } from "../services/UsuariosServices";
export declare class UsuariosController {
    private usuariosPrd;
    constructor(usuariosPrd: UsuariosSevices);
    getUsuarios(): Promise<Usuarios[]>;
    guardar(usuario: Usuarios): Promise<Usuarios>;
    eliminarUsuarios(usuario: Usuarios[]): Promise<Usuarios>;
    modificar(id: number, usuario: Usuarios): Promise<Usuarios>;
    eliminar(id: number): Promise<Usuarios>;
}
