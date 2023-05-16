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
exports.TallerPeriodoxPersona = void 0;
const personas_1 = require("./../../personas/models/personas");
const taller_1 = require("./../../taller/models/taller");
const typeorm_1 = require("typeorm");
const periodo_1 = require("./periodo");
let TallerPeriodoxPersona = class TallerPeriodoxPersona {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: "id_tallerperiodoxpersona" }),
    __metadata("design:type", Number)
], TallerPeriodoxPersona.prototype, "idTallerPeriodoxPersona", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => periodo_1.Periodos),
    __metadata("design:type", periodo_1.Periodos)
], TallerPeriodoxPersona.prototype, "periodos", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => personas_1.Personas),
    __metadata("design:type", personas_1.Personas)
], TallerPeriodoxPersona.prototype, "personas", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => taller_1.Taller),
    __metadata("design:type", taller_1.Taller)
], TallerPeriodoxPersona.prototype, "talleres", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "status_tramite", default: "wait" }),
    __metadata("design:type", String)
], TallerPeriodoxPersona.prototype, "proceso", void 0);
TallerPeriodoxPersona = __decorate([
    (0, typeorm_1.Entity)()
], TallerPeriodoxPersona);
exports.TallerPeriodoxPersona = TallerPeriodoxPersona;
//# sourceMappingURL=tallerPeriodoxpersona.js.map