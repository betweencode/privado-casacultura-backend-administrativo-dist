import { Usuariosesion } from './../../../autenticacion/contants/constants';
import { PersonasServices } from "../services/personas.services";
import { Personas } from '../models/personas';
export declare class PersonasController {
    private personasPrd;
    constructor(personasPrd: PersonasServices);
    getAll(): Promise<Personas[]>;
    getPersonasActivas(user: Usuariosesion): Promise<Personas[]>;
    guardarPersonas(user: Usuariosesion, request: Personas): Promise<Personas>;
}
