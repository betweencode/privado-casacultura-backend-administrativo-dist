import { Personas } from './../../../casacultura/personas/models/personas';
import { Roles } from "../../../catalogos/roles/models/Roles";
export declare class Usuarios {
    id: number;
    nombre: string;
    primerApellido: string;
    segundoApellido: string;
    correo: string;
    telefono: string;
    nacimiento: Date;
    password: string;
    esActivo: boolean;
    rol: Roles;
    personas: Personas[];
}
