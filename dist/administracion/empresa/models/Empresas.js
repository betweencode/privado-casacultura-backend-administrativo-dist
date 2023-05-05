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
var Empresas_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Empresas = void 0;
const Versiones_1 = require("./../../../catalogos/versiones/models/Versiones");
const typeorm_1 = require("typeorm");
let Empresas = Empresas_1 = class Empresas {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: "id_empresa" }),
    __metadata("design:type", Number)
], Empresas.prototype, "idEmpresa", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Empresas.prototype, "nombre", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "rfc", nullable: true }),
    __metadata("design:type", String)
], Empresas.prototype, "rfc", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "razon_social", nullable: true }),
    __metadata("design:type", String)
], Empresas.prototype, "razonSocial", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "is_cliente", default: false }),
    __metadata("design:type", Boolean)
], Empresas.prototype, "isCliente", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Empresas_1, empresas => empresas.empresas, { nullable: true }),
    (0, typeorm_1.JoinColumn)({ name: "id_subempresa", referencedColumnName: 'idEmpresa' }),
    __metadata("design:type", Empresas)
], Empresas.prototype, "idSubempresa", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Empresas_1, empresas => empresas.empresas),
    (0, typeorm_1.JoinColumn)({ name: "id_empresa" }),
    __metadata("design:type", Array)
], Empresas.prototype, "empresas", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => Versiones_1.Versiones, versiones => versiones.idVersion),
    (0, typeorm_1.JoinTable)({ name: "detalle_empresasxversiones", joinColumn: { name: "id_empresa" }, inverseJoinColumn: { name: "id_version" } }),
    __metadata("design:type", Array)
], Empresas.prototype, "versiones", void 0);
Empresas = Empresas_1 = __decorate([
    (0, typeorm_1.Entity)()
], Empresas);
exports.Empresas = Empresas;
//# sourceMappingURL=Empresas.js.map