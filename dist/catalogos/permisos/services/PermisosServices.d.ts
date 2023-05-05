import { Repository } from "typeorm";
import { Permisos } from "../models/Permisos";
export declare class PermisosServices {
    private permisosRepository;
    constructor(permisosRepository: Repository<Permisos>);
    consultarTodos(): Promise<Permisos[]>;
    consultarById(id: number): Promise<Permisos>;
    guardar(permisos: Permisos): Promise<Permisos>;
    modificar(id: number, permisos: Permisos): Promise<Permisos>;
    eliminar(permiso: Permisos): Promise<void>;
}
