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
exports.Usuarios = void 0;
const personas_1 = require("./../../../casacultura/personas/models/personas");
const Roles_1 = require("../../../catalogos/roles/models/Roles");
const typeorm_1 = require("typeorm");
let Usuarios = class Usuarios {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: "id_usuario" }),
    __metadata("design:type", Number)
], Usuarios.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Usuarios.prototype, "nombre", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "primer_apellido", nullable: true }),
    __metadata("design:type", String)
], Usuarios.prototype, "primerApellido", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "segundo_apellido", nullable: true }),
    __metadata("design:type", String)
], Usuarios.prototype, "segundoApellido", void 0);
__decorate([
    (0, typeorm_1.Index)({ unique: true }),
    (0, typeorm_1.Column)({ unique: true }),
    __metadata("design:type", String)
], Usuarios.prototype, "correo", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Usuarios.prototype, "telefono", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Date)
], Usuarios.prototype, "nacimiento", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Usuarios.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "es_activo", default: true }),
    __metadata("design:type", Boolean)
], Usuarios.prototype, "esActivo", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Roles_1.Roles),
    (0, typeorm_1.JoinColumn)({ name: "id_rol" }),
    __metadata("design:type", Roles_1.Roles)
], Usuarios.prototype, "rol", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => personas_1.Personas, person => person.usuario),
    __metadata("design:type", Array)
], Usuarios.prototype, "personas", void 0);
Usuarios = __decorate([
    (0, typeorm_1.Entity)()
], Usuarios);
exports.Usuarios = Usuarios;
//# sourceMappingURL=Usuarios.js.map