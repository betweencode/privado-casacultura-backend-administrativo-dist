import { Submodulos } from "../models/Submodulos";
import { SubmodulosServices } from "../services/submodulosServices";
export declare class SubmodulosController {
    private submodulosPrd;
    constructor(submodulosPrd: SubmodulosServices);
    consultarAll(): Promise<Submodulos[]>;
    consultarById(id: number): Promise<Submodulos>;
}
