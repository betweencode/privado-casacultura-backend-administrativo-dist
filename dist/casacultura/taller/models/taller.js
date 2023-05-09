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
exports.Taller = void 0;
const categoriaTaller_1 = require("./../../categoriataller/models/categoriaTaller");
const typeorm_1 = require("typeorm");
let Taller = class Taller {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: "id_taller" }),
    __metadata("design:type", Number)
], Taller.prototype, "idTaller", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Taller.prototype, "nombre", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Taller.prototype, "clave", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "conocimientos_previos" }),
    __metadata("design:type", String)
], Taller.prototype, "conocimientosPrevios", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "edad_minima" }),
    __metadata("design:type", Number)
], Taller.prototype, "edadMinima", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "edad_maxima" }),
    __metadata("design:type", Number)
], Taller.prototype, "edadMaxima", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Taller.prototype, "tallerista", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Taller.prototype, "modalidad", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Taller.prototype, "horario", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Taller.prototype, "salones", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Taller.prototype, "costo", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Taller.prototype, "imagen", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "es_activo", default: true }),
    __metadata("design:type", Boolean)
], Taller.prototype, "esActivo", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => categoriaTaller_1.CategoriaTaller),
    __metadata("design:type", categoriaTaller_1.CategoriaTaller)
], Taller.prototype, "categoria", void 0);
Taller = __decorate([
    (0, typeorm_1.Entity)()
], Taller);
exports.Taller = Taller;
//# sourceMappingURL=taller.js.map