import { Repository } from "typeorm";
import { Modulos } from "../models/Modulos";
export declare class ModulosServices {
    private modulosRepository;
    constructor(modulosRepository: Repository<Modulos>);
    getAll(): Promise<Modulos[]>;
    getById(id: number): Promise<Modulos>;
    eliminar(modulo: Modulos): Promise<void>;
    guardar(modulo: Modulos): Promise<void>;
}
