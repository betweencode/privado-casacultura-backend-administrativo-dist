import { EmpresasServices } from '../services/EmpresasServices';
import { Empresas } from '../models/Empresas';
export declare class EmpresasController {
    private empresasPrd;
    constructor(empresasPrd: EmpresasServices);
    obtenertodasEmpresas(): Promise<Empresas[]>;
}
