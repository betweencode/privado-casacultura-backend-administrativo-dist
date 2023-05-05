import { Modulos } from "../models/Modulos";
import { ModulosServices } from "../services/modulosServices";
export declare class ModulosController {
    private modulosPrd;
    constructor(modulosPrd: ModulosServices);
    getAllModulos(): Promise<Modulos[]>;
    obtenerporid(id: number): Promise<any>;
}
