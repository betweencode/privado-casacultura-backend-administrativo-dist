import { VersionesServices } from './../services/VersionesServices';
import { Versiones } from '../models/Versiones';
export declare class VersionesController {
    private versionPrd;
    constructor(versionPrd: VersionesServices);
    getVersionesByCliente(): Promise<Versiones[]>;
    insertarVersiones(versiones: Versiones): Promise<Versiones>;
}
