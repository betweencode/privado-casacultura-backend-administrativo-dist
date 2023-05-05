import { Strategy } from "passport-local";
import { AutenticacionServices } from "./autenticacionServices";
declare const LocalStrategy_base: new (...args: any[]) => Strategy;
export declare class LocalStrategy extends LocalStrategy_base {
    private autenticacionPrd;
    constructor(autenticacionPrd: AutenticacionServices);
    validate(usuario: string, contra: string): Promise<any>;
}
export {};
