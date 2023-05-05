import { Roles } from "../models/Roles";
import { RolesService } from "../services/roles.service";
export declare class RolesController {
    private rolesPrd;
    constructor(rolesPrd: RolesService);
    getAll(): Promise<Roles[]>;
    getById(idRol: number): Promise<Roles>;
    insertRoles(rol: Roles): Promise<Roles>;
    updateRoles(idRol: number, body: any): Promise<Roles>;
    delete(idRol: number, idEmpresa: number): Promise<Roles>;
    eliminarMasivo(roles: Roles[]): Promise<any>;
}
