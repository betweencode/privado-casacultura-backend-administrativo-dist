import { Permisos } from '../models/Permisos';
import { PermisosServices } from '../services/PermisosServices';
export declare class PermisosController {
    private permisosPrd;
    constructor(permisosPrd: PermisosServices);
    consultaAll(): Promise<Permisos[]>;
    consultarById(id: number): Promise<Permisos>;
    guardar(permisos: Permisos): Promise<Permisos>;
    modificar(id: number, permisos: Permisos): Promise<Permisos>;
}
