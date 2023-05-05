"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Versiones = void 0;
const Empresas_1 = require("./../../../administracion/empresa/models/Empresas");
const typeorm_1 = require("typeorm");
const Versionesxmodulos_1 = require("./Versionesxmodulos");
let Versiones = class Versiones {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: "id_version" }),
    __metadata("design:type", Number)
], Versiones.prototype, "idVersion", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Versiones.prototype, "nombre", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'nombre_corto' }),
    __metadata("design:type", String)
], Versiones.prototype, "nombrecorto", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'es_cliente' }),
    __metadata("design:type", Boolean)
], Versiones.prototype, "esCliente", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "es_activo" }),
    __metadata("design:type", Boolean)
], Versiones.prototype, "esActivo", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => Empresas_1.Empresas, obj1 => obj1.versiones),
    __metadata("design:type", Array)
], Versiones.prototype, "empresas", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Versionesxmodulos_1.Versionesxmodulos, relacion => relacion.version, { cascade: true }),
    __metadata("design:type", Array)
], Versiones.prototype, "modulosxversion", void 0);
Versiones = __decorate([
    (0, typeorm_1.Entity)()
], Versiones);
exports.Versiones = Versiones;
//# sourceMappingURL=Versiones.js.map