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
exports.RolesxPermisos = void 0;
const Modulos_1 = require("./../../modulos/models/Modulos");
const Permisos_1 = require("../../permisos/models/Permisos");
const typeorm_1 = require("typeorm");
const Roles_1 = require("./Roles");
const Submodulos_1 = require("../../submodulos/models/Submodulos");
let RolesxPermisos = class RolesxPermisos {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], RolesxPermisos.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Roles_1.Roles, relacion => relacion.permisosxsubmodulos),
    (0, typeorm_1.JoinColumn)({ name: "id_rol" }),
    __metadata("design:type", Roles_1.Roles)
], RolesxPermisos.prototype, "rol", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Permisos_1.Permisos),
    __metadata("design:type", Permisos_1.Permisos)
], RolesxPermisos.prototype, "permiso", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Submodulos_1.Submodulos),
    __metadata("design:type", Submodulos_1.Submodulos)
], RolesxPermisos.prototype, "submodulo", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Modulos_1.Modulos),
    __metadata("design:type", Modulos_1.Modulos)
], RolesxPermisos.prototype, "modulo", void 0);
RolesxPermisos = __decorate([
    (0, typeorm_1.Entity)()
], RolesxPermisos);
exports.RolesxPermisos = RolesxPermisos;
//# sourceMappingURL=RolesPermisos.js.map