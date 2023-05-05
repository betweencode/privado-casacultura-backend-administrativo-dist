import { Empresas } from './../../../administracion/empresa/models/Empresas';
import { Modulos } from '../../modulos/models/Modulos';
import { RolesxPermisos } from "./RolesPermisos";
export declare class Roles {
    id: number;
    nombre: string;
    proceso: string;
    esActivo: boolean;
    permisosxsubmodulos: RolesxPermisos[];
    modulos: Modulos[];
    isRolEmpresa: boolean;
    empresas: Empresas;
}
