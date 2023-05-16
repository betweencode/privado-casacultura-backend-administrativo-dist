import { TallerPeriodoxPersona } from './../../periodos/models/tallerPeriodoxpersona';
import { Usuarios } from './../../../administracion/usuarios/models/Usuarios';
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
    calle: string;
    numeroInterior: string;
    numeroExterior: string;
    municipio: string;
    codigopostal: string;
    telefono: string;
    movil: string;
    urlFotoIdentificacionofical: string;
    estadoCivil: string;
    usuario: Usuarios;
    detallePeriodoPersonas: TallerPeriodoxPersona[];
    discapacidad: string;
    alergia: string;
    tipoSangre: string;
}
