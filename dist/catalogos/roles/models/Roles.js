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
exports.Roles = void 0;
const Empresas_1 = require("./../../../administracion/empresa/models/Empresas");
const typeorm_1 = require("typeorm");
const RolesPermisos_1 = require("./RolesPermisos");
let Roles = class Roles {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: "id_rol" }),
    __metadata("design:type", Number)
], Roles.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Roles.prototype, "nombre", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: "" }),
    __metadata("design:type", String)
], Roles.prototype, "proceso", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: true, name: "es_activo" }),
    __metadata("design:type", Boolean)
], Roles.prototype, "esActivo", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => RolesPermisos_1.RolesxPermisos, relacion => relacion.rol, { cascade: true, onUpdate: "CASCADE" }),
    __metadata("design:type", Array)
], Roles.prototype, "permisosxsubmodulos", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'is_rolempresa', default: false }),
    __metadata("design:type", Boolean)
], Roles.prototype, "isRolEmpresa", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Empresas_1.Empresas),
    __metadata("design:type", Empresas_1.Empresas)
], Roles.prototype, "empresas", void 0);
Roles = __decorate([
    (0, typeorm_1.Entity)()
], Roles);
exports.Roles = Roles;
//# sourceMappingURL=Roles.js.map