import { CategoriaTaller } from "../models/categoriaTaller";
import { Repository } from "typeorm";
export declare class CategoriaTallerServices {
    private repository;
    constructor(repository: Repository<CategoriaTaller>);
    getAll(): Promise<CategoriaTaller[]>;
    getAllActivos(): Promise<CategoriaTaller[]>;
    getAllActivoswithCategory(): Promise<CategoriaTaller[]>;
    getById(idtaller: number): Promise<CategoriaTaller>;
    gurdar(obj: CategoriaTaller): Promise<{
        resultado: boolean;
        mensaje: string;
        datos: any;
    }>;
    eliminandoRegistro(id: number): Promise<{
        resultado: boolean;
        mensaje: string;
        datos: any;
    }>;
}
