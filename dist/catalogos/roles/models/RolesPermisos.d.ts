import { Modulos } from './../../modulos/models/Modulos';
import { Permisos } from "../../permisos/models/Permisos";
import { Roles } from "./Roles";
import { Submodulos } from "../../submodulos/models/Submodulos";
export declare class RolesxPermisos {
    id: number;
    rol: Roles;
    permiso: Permisos;
    submodulo: Submodulos;
    modulo: Modulos;
}
