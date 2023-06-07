import { Usuarios } from './../../../administracion/usuarios/models/Usuarios';
import { PeriodosServices } from "../services/periodosServices";
import { Periodos } from "../models/periodo";
import { TallerPeriodoxPersona } from "../models/tallerPeriodoxpersona";
export declare class PeriodosController {
    private periodoPrd;
    constructor(periodoPrd: PeriodosServices);
    getAll(): Promise<Periodos[]>;
    getAllActivos(): Promise<Periodos>;
    guardar(request: Periodos): Promise<{
        resultado: boolean;
        mensaje: string;
        datos: any;
    }>;
    guardarPersonaPeriodo(request: TallerPeriodoxPersona): Promise<TallerPeriodoxPersona>;
    guardarPersonaPeriodoArreglo(usuario: Usuarios, request: TallerPeriodoxPersona[]): Promise<{
        resultado: boolean;
        mensaje: string;
        datos: any;
    }>;
}
