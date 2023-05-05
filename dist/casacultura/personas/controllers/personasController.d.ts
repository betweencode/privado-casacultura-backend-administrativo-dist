import { PersonasServices } from "../services/personas.services";
export declare class PersonasController {
    private personasPrd;
    constructor(personasPrd: PersonasServices);
    getAll(): Promise<import("../models/personas").Personas[]>;
}
