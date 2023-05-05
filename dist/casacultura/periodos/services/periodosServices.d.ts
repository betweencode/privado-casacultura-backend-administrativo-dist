import { Repository } from "typeorm";
import { Periodos } from "../models/periodo";
export declare class PeriodosServices {
    private repository;
    constructor(repository: Repository<Periodos>);
    getAll(): Promise<Periodos[]>;
}
