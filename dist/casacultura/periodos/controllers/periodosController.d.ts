import { PeriodosServices } from "../services/periodosServices";
import { Periodos } from "../models/periodo";
export declare class PeriodosController {
    private periodoPrd;
    constructor(periodoPrd: PeriodosServices);
    getAll(): Promise<Periodos[]>;
    guardar(request: Periodos): Promise<{
        resultado: boolean;
        mensaje: string;
        datos: any;
    }>;
}
