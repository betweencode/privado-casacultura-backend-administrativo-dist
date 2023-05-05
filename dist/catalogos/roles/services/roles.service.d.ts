import { Modulos } from './../../modulos/models/Modulos';
import { Repository } from 'typeorm';
import { Roles } from '../models/Roles';
export declare class RolesService {
    private rolesRepository;
    constructor(rolesRepository: Repository<Roles>);
    getAll(): Promise<Roles[]>;
    getById(idRol: number): Promise<Roles>;
    guardar(obj: Roles): Promise<Roles>;
    actualizar(id: number, obj: Roles): Promise<Roles>;
    eliminarRol(idempresa: number, idrol: number): Promise<Roles>;
    eliminarMasivo(roles: Roles[]): Promise<any>;
    insertarRelacionRoles(parametros: any): Promise<void>;
    getRolesByEmpresa(idEmpresa: number): Promise<Roles[]>;
    getRolesByEmpresaAndrol(idEmpresa: number, idrol: number): Promise<Roles>;
    filtroRelaciones(version: Roles): Modulos[];
    obtenerRolesInicialesRegister(proceso: string): Promise<Roles>;
}
