import { CategoriaTallerServices } from "../services/categoriaTallerServices";
import { CategoriaTaller } from "../models/categoriaTaller";
export declare class CategoriaTallerController {
    private categoriaTallerPrd;
    constructor(categoriaTallerPrd: CategoriaTallerServices);
    getAll(): Promise<CategoriaTaller[]>;
    getAllActivos(): Promise<CategoriaTaller[]>;
    getById(numero: number): Promise<CategoriaTaller>;
    guardar(request: CategoriaTaller): Promise<{
        resultado: boolean;
        mensaje: string;
        datos: any;
    }>;
    eliminar(numero: number): Promise<{
        resultado: boolean;
        mensaje: string;
        datos: any;
    }>;
}
