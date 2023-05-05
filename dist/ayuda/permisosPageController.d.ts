import { Permisos } from './../catalogos/permisos/models/Permisos';
import { PermisosServices } from './../catalogos/permisos/services/PermisosServices';
export declare class PermisosPageController {
    private permisosPrd;
    constructor(permisosPrd: PermisosServices);
    submodulosPage(): Promise<{
        mensaje: string;
        permisos: Permisos[];
    }>;
    guardarModulo(request: any): Promise<void>;
    eliminarModulo(request: any): Promise<void>;
}
