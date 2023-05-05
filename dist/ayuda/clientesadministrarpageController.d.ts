import { UsuariosSevices } from './../administracion/usuarios/services/UsuariosServices';
import { EmpresasServices } from './../administracion/empresa/services/EmpresasServices';
import { Empresas } from './../administracion/empresa/models/Empresas';
import { Roles } from './../catalogos/roles/models/Roles';
import { RolesService } from './../catalogos/roles/services/roles.service';
export declare class ClientesAdministrarPageController {
    private rolesPrd;
    private empresasPrd;
    private usuariosPrd;
    constructor(rolesPrd: RolesService, empresasPrd: EmpresasServices, usuariosPrd: UsuariosSevices);
    getPaginaRenderizador(req: any): Promise<{
        mensaje: string;
        idempresa: any;
        roles: Roles[];
    }>;
    guardarRoles(req: any): Promise<{
        url: string;
    }>;
    eliminar(req: any): Promise<{
        url: string;
    }>;
    guardarUsuario(req: any): Promise<{
        url: string;
    }>;
    getPaginaRenderizadorRelacionRol(req: any): Promise<{
        relacion: Roles;
        id: any;
        empresa: Empresas;
        parseando: (obj: any) => string;
    }>;
    guardarRelaciones(req: any): Promise<{
        url: string;
    }>;
}
