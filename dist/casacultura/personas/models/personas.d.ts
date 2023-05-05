import { Periodos } from './../../periodos/models/periodo';
export declare class Personas {
    idPersona: number;
    nombre: string;
    primerApellido: string;
    segundoApellido: string;
    fechaNacimiento: Date;
    curp: string;
    esTutor: boolean;
    genero: string;
    foto: string;
    entidad: string;
    domicilio: string;
    codigopostal: string;
    discapacidad: string;
    tipoSangre: string;
    telefono: string;
    movil: string;
    periodossuscritos: Periodos[];
}
