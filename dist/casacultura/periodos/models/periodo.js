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
exports.Periodos = void 0;
const taller_1 = require("./../../taller/models/taller");
const typeorm_1 = require("typeorm");
let Periodos = class Periodos {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: "id_periodo" }),
    __metadata("design:type", Number)
], Periodos.prototype, "idPeriodo", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Periodos.prototype, "nombre", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], Periodos.prototype, "fecha", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "es_activo" }),
    __metadata("design:type", Boolean)
], Periodos.prototype, "esActivo", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => taller_1.Taller, taller => taller.idTaller),
    (0, typeorm_1.JoinTable)({ name: "detalle_periodoxtaller", joinColumn: { name: "id_periodo" }, inverseJoinColumn: { name: "id_taller" } }),
    __metadata("design:type", Array)
], Periodos.prototype, "talleres", void 0);
Periodos = __decorate([
    (0, typeorm_1.Entity)()
], Periodos);
exports.Periodos = Periodos;
//# sourceMappingURL=periodo.js.map