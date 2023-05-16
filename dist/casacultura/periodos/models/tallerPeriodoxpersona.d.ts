import { Personas } from './../../personas/models/personas';
import { Taller } from './../../taller/models/taller';
import { Periodos } from "./periodo";
export declare class TallerPeriodoxPersona {
    idTallerPeriodoxPersona: number;
    periodos: Periodos;
    personas: Personas;
    talleres: Taller;
    proceso: string;
}
