import { Taller } from './../models/taller';
import { Repository } from "typeorm";
export declare class TallerServices {
    private repository;
    constructor(repository: Repository<Taller>);
    getAll(): Promise<Taller[]>;
    getAllActivos(): Promise<Taller[]>;
    getById(idTaller: number): Promise<Taller>;
    guardar(obj: Taller): Promise<{
        resultado: boolean;
        mensaje: string;
        datos: any;
    }>;
    eliminar(idTaller: number): Promise<{
        resultado: boolean;
        mensaje: string;
        datos: any;
    }>;
}
