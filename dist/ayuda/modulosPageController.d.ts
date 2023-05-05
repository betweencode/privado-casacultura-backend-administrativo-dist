import { Modulos } from './../catalogos/modulos/models/Modulos';
import { ModulosServices } from './../catalogos/modulos/services/modulosServices';
export declare class ModulosPageController {
    private modulosPrd;
    constructor(modulosPrd: ModulosServices);
    modulosPage(): Promise<{
        mensaje: string;
        modulos: Modulos[];
    }>;
    guardarModulo(request: any): Promise<void>;
    eliminarModulo(request: any): Promise<void>;
}
