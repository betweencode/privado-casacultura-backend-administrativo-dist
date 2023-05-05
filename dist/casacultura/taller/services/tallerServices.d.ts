import { Taller } from './../models/taller';
import { Repository } from "typeorm";
export declare class TallerServices {
    private repository;
    constructor(repository: Repository<Taller>);
    getAll(): Promise<Taller[]>;
}
