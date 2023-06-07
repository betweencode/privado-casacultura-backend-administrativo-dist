import { Usuarios } from './../../../administracion/usuarios/models/Usuarios';
import { PersonasServices } from './../../personas/services/personas.services';
import { Repository } from "typeorm";
import { Periodos } from "../models/periodo";
import { TallerPeriodoxPersona } from "../models/tallerPeriodoxpersona";
export declare class PeriodosServices {
    private repository;
    private repositorypersonaPeriodo;
    private personasPrd;
    constructor(repository: Repository<Periodos>, repositorypersonaPeriodo: Repository<TallerPeriodoxPersona>, personasPrd: PersonasServices);
    getAll(): Promise<Periodos[]>;
    getAllactivos(): Promise<Periodos>;
    guardar(obj: any): Promise<{
        resultado: boolean;
        mensaje: string;
        datos: any;
    }>;
    guardarDatosAlumnoTaller(periodoxPersona: TallerPeriodoxPersona): Promise<TallerPeriodoxPersona>;
    guardarDatosAlumnoTallerArreglo(usuario: Usuarios, periodoxPersona: TallerPeriodoxPersona[]): Promise<{
        resultado: boolean;
        mensaje: string;
        datos: any;
    }>;
}
