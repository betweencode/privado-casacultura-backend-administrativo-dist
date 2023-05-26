import { PersonasServices } from './../../personas/services/personas.services';
import { Usuariosesion } from './../../../autenticacion/contants/constants';
import { TallerServices } from "../services/tallerServices";
import { Taller } from "../models/taller";
export declare class TallerController {
    private tallerPrd;
    private personasPrd;
    constructor(tallerPrd: TallerServices, personasPrd: PersonasServices);
    getAll(): Promise<Taller[]>;
    getAllActivos(): Promise<Taller[]>;
    getById(id: number): Promise<Taller>;
    guardar(request: Taller): Promise<{
        resultado: boolean;
        mensaje: string;
        datos: any;
    }>;
    getTalleresByPersona(usuarioSesion: Usuariosesion): Promise<import("../../personas/models/personas").Personas[]>;
}
