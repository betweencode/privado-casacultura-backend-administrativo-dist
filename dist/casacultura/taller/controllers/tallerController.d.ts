import { TallerServices } from "../services/tallerServices";
import { Taller } from "../models/taller";
export declare class TallerController {
    private tallerPrd;
    constructor(tallerPrd: TallerServices);
    getAll(): Promise<Taller[]>;
    guardar(request: Taller): Promise<{
        resultado: boolean;
        mensaje: string;
        datos: any;
    }>;
}
