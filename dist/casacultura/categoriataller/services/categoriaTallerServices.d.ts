import { CategoriaTaller } from "../models/categoriaTaller";
import { Repository } from "typeorm";
export declare class CategoriaTallerServices {
    private repository;
    constructor(repository: Repository<CategoriaTaller>);
    getAll(): Promise<CategoriaTaller[]>;
    gurdar(obj: CategoriaTaller): Promise<{
        resultado: boolean;
        mensaje: string;
        datos: any;
    }>;
}
