import { Versiones } from './../../../catalogos/versiones/models/Versiones';
export declare class Empresas {
    idEmpresa: number;
    nombre: string;
    rfc: string;
    razonSocial: string;
    isCliente: boolean;
    idSubempresa: Empresas;
    empresas: Empresas[];
    versiones: Versiones[];
}
