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
exports.Personas = void 0;
const periodo_1 = require("./../../periodos/models/periodo");
const typeorm_1 = require("typeorm");
let Personas = class Personas {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: "id_persona" }),
    __metadata("design:type", Number)
], Personas.prototype, "idPersona", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Personas.prototype, "nombre", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "primer_apellido" }),
    __metadata("design:type", String)
], Personas.prototype, "primerApellido", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "segundo_apellido" }),
    __metadata("design:type", String)
], Personas.prototype, "segundoApellido", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "fecha_nacimiento" }),
    __metadata("design:type", Date)
], Personas.prototype, "fechaNacimiento", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Personas.prototype, "curp", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "es_tutor" }),
    __metadata("design:type", Boolean)
], Personas.prototype, "esTutor", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Personas.prototype, "genero", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Personas.prototype, "foto", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Personas.prototype, "entidad", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Personas.prototype, "domicilio", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Personas.prototype, "codigopostal", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Personas.prototype, "discapacidad", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Personas.prototype, "tipoSangre", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Personas.prototype, "telefono", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Personas.prototype, "movil", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => periodo_1.Periodos, periodos => periodos.idPeriodo),
    (0, typeorm_1.JoinTable)({ name: "detalle_personasxperiodo", joinColumn: { name: "id_persona" }, inverseJoinColumn: { name: "id_periodo" } }),
    __metadata("design:type", Array)
], Personas.prototype, "periodossuscritos", void 0);
Personas = __decorate([
    (0, typeorm_1.Entity)()
], Personas);
exports.Personas = Personas;
//# sourceMappingURL=personas.js.map