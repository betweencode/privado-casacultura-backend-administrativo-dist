import { Personas } from "../models/personas";
import { Repository } from "typeorm";
export declare class PersonasServices {
    private repository;
    constructor(repository: Repository<Personas>);
    getAll(): Promise<Personas[]>;
}
