import { JwtService } from "@nestjs/jwt";
import { RolesService } from "../../catalogos/roles/services/roles.service";
import { Usuarios } from "../../administracion/usuarios/models/Usuarios";
import { UsuariosSevices } from "../../administracion/usuarios/services/UsuariosServices";
export declare class AutenticacionServices {
    private usuariosPrd;
    private jwtService;
    private rolesPrd;
    constructor(usuariosPrd: UsuariosSevices, jwtService: JwtService, rolesPrd: RolesService);
    validateUser(correo: string, pass: string): Promise<any>;
    login(user: Usuarios): Promise<{
        access_token: string;
    }>;
}
