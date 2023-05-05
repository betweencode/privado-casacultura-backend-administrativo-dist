import { SubmodulosServices } from './../catalogos/submodulos/services/submodulosServices';
import { Submodulos } from './../catalogos/submodulos/models/Submodulos';
export declare class SubmodulosPageController {
    private submodulosPrd;
    constructor(submodulosPrd: SubmodulosServices);
    submoduloPage(): Promise<{
        mensaje: string;
        submodulos: Submodulos[];
    }>;
    guardarSubmodulo(request: any): Promise<void>;
    eliminarSubmodulo(request: any): Promise<void>;
}
