import { Personas } from './../models/personas';
import { Usuarios } from './../../../administracion/usuarios/models/Usuarios';
import { Repository } from "typeorm";
export declare class PersonasServices {
    private repository;
    private repositoryUsuarios;
    constructor(repository: Repository<Personas>, repositoryUsuarios: Repository<Usuarios>);
    getAll(): Promise<Personas[]>;
    getTalleresPorPeriodoPersona(usuario: string): Promise<Personas[]>;
    getPersonasSesion(usuario: string): Promise<Personas[]>;
    guardarPersona(username: string, persona: Personas): Promise<Personas>;
}
