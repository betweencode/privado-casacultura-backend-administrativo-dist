import { Personas } from './../models/personas';
import { Usuarios } from './../../../administracion/usuarios/models/Usuarios';
import { Repository } from "typeorm";
import { AwsS3ComunicacionServices } from '../../../serviciosexternos/services/AwsS3Comunicacion.services';
export declare class PersonasServices {
    private repository;
    private repositoryUsuarios;
    private s3Provices;
    constructor(repository: Repository<Personas>, repositoryUsuarios: Repository<Usuarios>, s3Provices: AwsS3ComunicacionServices);
    getAll(): Promise<Personas[]>;
    getTalleresPorPeriodoPersona(usuario: string): Promise<Personas[]>;
    getTalleresPorPeriodoPersonaIdPersona(usuario: string, idPersona: number): Promise<Personas[]>;
    getPersonasSesion(usuario: string): Promise<Personas[]>;
    guardarPersona(username: string, persona: Personas): Promise<Personas>;
    getPersonaById(idPersona: number): Promise<Personas>;
}
