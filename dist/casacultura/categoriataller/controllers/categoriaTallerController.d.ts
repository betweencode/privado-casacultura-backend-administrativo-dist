import { CategoriaTallerServices } from "../services/categoriaTallerServices";
export declare class CategoriaTallerController {
    private categoriaTallerPrd;
    constructor(categoriaTallerPrd: CategoriaTallerServices);
    getAll(): Promise<import("../models/categoriaTaller").CategoriaTaller[]>;
}
