import { CategoriaTaller } from './../../categoriataller/models/categoriaTaller';
export declare class Taller {
    idTaller: number;
    nombre: string;
    clave: string;
    conocimientosPrevios: string;
    edadMinima: number;
    edadMaxima: number;
    tallerista: string;
    modalidad: string;
    horario: string;
    salones: string;
    costo: number;
    imagen: string;
    esActivo: boolean;
    categoria: CategoriaTaller;
}
