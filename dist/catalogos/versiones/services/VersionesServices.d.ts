import { Modulos } from './../../modulos/models/Modulos';
import { Versionesxmodulos } from './../models/Versionesxmodulos';
import { Versiones } from "../models/Versiones";
import { Repository } from "typeorm";
export declare class VersionesServices {
    private repositoryVersiones;
    private repositoryVersionesmodulos;
    constructor(repositoryVersiones: Repository<Versiones>, repositoryVersionesmodulos: Repository<Versionesxmodulos>);
    getVersionesClientes(): Promise<Versiones[]>;
    insertVersion(version: Versiones): Promise<Versiones>;
    getVersionById(idVersion: number): Promise<Versiones>;
    eliminarRelacion(idVersion: number): Promise<void>;
    insertarRelacionVersiones(parametros: any): Promise<void>;
    obtenerRelacioncorrectaVersionesById(idversion: number): Promise<Versiones>;
    obtenerRelacioncorrectaVersiones(): Promise<Versiones[]>;
    filtroRelaciones(version: Versiones): Modulos[];
}
