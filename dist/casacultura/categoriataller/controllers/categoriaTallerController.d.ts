import { CategoriaTallerServices } from "../services/categoriaTallerServices";
import { CategoriaTaller } from "../models/categoriaTaller";
export declare class CategoriaTallerController {
    private categoriaTallerPrd;
    constructor(categoriaTallerPrd: CategoriaTallerServices);
    getAll(): Promise<CategoriaTaller[]>;
    guardar(request: CategoriaTaller): Promise<{
        resultado: boolean;
        mensaje: string;
        datos: any;
    }>;
}
