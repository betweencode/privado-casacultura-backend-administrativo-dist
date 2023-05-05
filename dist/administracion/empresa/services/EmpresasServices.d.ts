import { VersionesServices } from './../../../catalogos/versiones/services/VersionesServices';
import { Repository } from 'typeorm';
import { Empresas } from '../models/Empresas';
export declare class EmpresasServices {
    private empresasRepository;
    private versionPrd;
    constructor(empresasRepository: Repository<Empresas>, versionPrd: VersionesServices);
    getAll(): Promise<Empresas[]>;
    guardarEmpresaInicial(parametros: any): Promise<Empresas>;
    eliminarEmpresaInicial(idEmpresa: any): Promise<void>;
    getEspecificaEmpresa(idEmpresa: number): Promise<Empresas>;
}
