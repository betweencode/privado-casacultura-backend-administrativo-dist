export declare const jwtConstants: {
    secret: string;
};
export declare const IS_PUBLIC_KEY = "LLAVEPUBLICABETWEENCODE";
export declare const Public: () => import("@nestjs/common").CustomDecorator<string>;
export declare const CurrentUser: (...dataOrPipes: unknown[]) => ParameterDecorator;
export interface Usuariosesion {
    nombre: string;
    correo: string;
}
