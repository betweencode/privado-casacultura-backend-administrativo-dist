import { VersionesServices } from './../catalogos/versiones/services/VersionesServices';
import { PermisosServices } from './../catalogos/permisos/services/PermisosServices';
import { SubmodulosServices } from './../catalogos/submodulos/services/submodulosServices';
import { ModulosServices } from './../catalogos/modulos/services/modulosServices';
export declare class VersionxmoduloPageController {
    private modulosPrd;
    private submodulosPrd;
    private permisosPrd;
    private versionesPrd;
    constructor(modulosPrd: ModulosServices, submodulosPrd: SubmodulosServices, permisosPrd: PermisosServices, versionesPrd: VersionesServices);
    renderizar(request: any): Promise<{
        mensaje: string;
        nombre: any;
        id: any;
        modulos: import("../catalogos/modulos/models/Modulos").Modulos[];
        submodulos: import("../catalogos/submodulos/models/Submodulos").Submodulos[];
        permisos: import("../catalogos/permisos/models/Permisos").Permisos[];
        relacion: import("../catalogos/versiones/models/Versiones").Versiones;
    }>;
    guardarRelaciones(req: any): Promise<{
        url: string;
    }>;
    eliminarRelaciones(req: any): Promise<void>;
}
