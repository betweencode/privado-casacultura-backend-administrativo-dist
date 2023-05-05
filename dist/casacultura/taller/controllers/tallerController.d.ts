import { TallerServices } from "../services/tallerServices";
export declare class TallerController {
    private tallerPrd;
    constructor(tallerPrd: TallerServices);
    getAll(): Promise<import("../models/taller").Taller[]>;
}
