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
const tallerPeriodoxpersona_1 = require("./../../periodos/models/tallerPeriodoxpersona");
const Usuarios_1 = require("./../../../administracion/usuarios/models/Usuarios");
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
    (0, typeorm_1.Column)({ name: "segundo_apellido", default: "" }),
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
    (0, typeorm_1.Column)({ name: "es_tutor", default: false }),
    __metadata("design:type", Boolean)
], Personas.prototype, "esTutor", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Personas.prototype, "genero", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: "" }),
    __metadata("design:type", String)
], Personas.prototype, "foto", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Personas.prototype, "entidad", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Personas.prototype, "calle", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "numero_interior" }),
    __metadata("design:type", String)
], Personas.prototype, "numeroInterior", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "numero_exterior" }),
    __metadata("design:type", String)
], Personas.prototype, "numeroExterior", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Personas.prototype, "municipio", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Personas.prototype, "codigopostal", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Personas.prototype, "telefono", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Personas.prototype, "movil", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "url_foto_identificacionofical", default: "" }),
    __metadata("design:type", String)
], Personas.prototype, "urlFotoIdentificacionofical", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "estado_civil", default: "" }),
    __metadata("design:type", String)
], Personas.prototype, "estadoCivil", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Usuarios_1.Usuarios),
    __metadata("design:type", Usuarios_1.Usuarios)
], Personas.prototype, "usuario", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => tallerPeriodoxpersona_1.TallerPeriodoxPersona, per => per.personas),
    __metadata("design:type", Array)
], Personas.prototype, "detallePeriodoPersonas", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: "" }),
    __metadata("design:type", String)
], Personas.prototype, "discapacidad", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: "" }),
    __metadata("design:type", String)
], Personas.prototype, "alergia", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Personas.prototype, "tipoSangre", void 0);
Personas = __decorate([
    (0, typeorm_1.Entity)()
], Personas);
exports.Personas = Personas;
//# sourceMappingURL=personas.js.map