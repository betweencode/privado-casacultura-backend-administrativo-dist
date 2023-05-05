import { Repository } from "typeorm";
import { Submodulos } from "../models/Submodulos";
export declare class SubmodulosServices {
    private submodulosRepository;
    constructor(submodulosRepository: Repository<Submodulos>);
    getall(): Promise<Submodulos[]>;
    getById(id: number): Promise<Submodulos>;
    eliminar(submodulo: Submodulos): Promise<void>;
    guardar(submodulo: Submodulos): Promise<Submodulos>;
}
