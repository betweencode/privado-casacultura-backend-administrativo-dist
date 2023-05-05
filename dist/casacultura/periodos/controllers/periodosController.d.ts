import { PeriodosServices } from "../services/periodosServices";
export declare class PeriodosController {
    private periodoPrd;
    constructor(periodoPrd: PeriodosServices);
    getAll(): Promise<import("../models/periodo").Periodos[]>;
}
