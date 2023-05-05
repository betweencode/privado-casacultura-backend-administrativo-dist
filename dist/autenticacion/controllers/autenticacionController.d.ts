import { UsuariosSevices } from './../../administracion/usuarios/services/UsuariosServices';
import { Usuarios } from './../../administracion/usuarios/models/Usuarios';
import { AutenticacionServices } from "../services/autenticacionServices";
export declare class AutenticacionController {
    private authServices;
    private usuariosPrd;
    constructor(authServices: AutenticacionServices, usuariosPrd: UsuariosSevices);
    login(req: any): Promise<{
        access_token: string;
    }>;
    registrar(usuario: Usuarios): Promise<{
        resultado: boolean;
        mensaje: string;
    }>;
}
