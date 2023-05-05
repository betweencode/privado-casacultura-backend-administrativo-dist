import { Modulos } from 'src/catalogos/modulos/models/Modulos';
import { Empresas } from './../../../administracion/empresa/models/Empresas';
import { Versionesxmodulos } from './Versionesxmodulos';
export declare class Versiones {
    idVersion: number;
    nombre: string;
    nombrecorto: string;
    esCliente: boolean;
    esActivo: boolean;
    empresas: Empresas[];
    modulosxversion: Versionesxmodulos[];
    modulos: Modulos[];
}
