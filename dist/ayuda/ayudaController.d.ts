import { UsuariosSevices } from './../administracion/usuarios/services/UsuariosServices';
import { Versiones } from './../catalogos/versiones/models/Versiones';
import { VersionesServices } from './../catalogos/versiones/services/VersionesServices';
import { EmpresasServices } from './../administracion/empresa/services/EmpresasServices';
export declare class AyudaController {
    private empresaprd;
    private versionesPrd;
    private usuariosPrd;
    constructor(empresaprd: EmpresasServices, versionesPrd: VersionesServices, usuariosPrd: UsuariosSevices);
    root(): Promise<{
        mensaje: string;
    }>;
    versiones(): Promise<{
        mensaje: string;
        versiones: Versiones[];
    }>;
    clientes(): Promise<{
        mensaje: string;
        empresas: any[];
        listaVersiones: Versiones[];
    }>;
    modulos(): Promise<{
        mensaje: string;
    }>;
    guardarEmpresaInicial(request: any): Promise<void>;
    guardarVersionInicialCliente(request: any): Promise<void>;
    eliminarEmpresaInicial(request: any): Promise<void>;
}
