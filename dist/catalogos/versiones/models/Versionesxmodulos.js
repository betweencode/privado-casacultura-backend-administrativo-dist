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
exports.Versionesxmodulos = void 0;
const Permisos_1 = require("./../../permisos/models/Permisos");
const Submodulos_1 = require("./../../submodulos/models/Submodulos");
const Modulos_1 = require("./../../modulos/models/Modulos");
const Versiones_1 = require("./Versiones");
const typeorm_1 = require("typeorm");
let Versionesxmodulos = class Versionesxmodulos {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Versionesxmodulos.prototype, "idversionxmodulo", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Versiones_1.Versiones, relacion => relacion.modulosxversion),
    (0, typeorm_1.JoinColumn)({ name: "id_version" }),
    __metadata("design:type", Versiones_1.Versiones)
], Versionesxmodulos.prototype, "version", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Modulos_1.Modulos),
    __metadata("design:type", Modulos_1.Modulos)
], Versionesxmodulos.prototype, "modulo", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Submodulos_1.Submodulos),
    __metadata("design:type", Submodulos_1.Submodulos)
], Versionesxmodulos.prototype, "submodulo", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Permisos_1.Permisos),
    __metadata("design:type", Permisos_1.Permisos)
], Versionesxmodulos.prototype, "permiso", void 0);
Versionesxmodulos = __decorate([
    (0, typeorm_1.Entity)()
], Versionesxmodulos);
exports.Versionesxmodulos = Versionesxmodulos;
//# sourceMappingURL=Versionesxmodulos.js.map