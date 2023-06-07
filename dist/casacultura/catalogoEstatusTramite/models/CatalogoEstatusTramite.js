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
exports.CatalogoEstatusTramite = void 0;
const typeorm_1 = require("typeorm");
let CatalogoEstatusTramite = class CatalogoEstatusTramite {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: "id_estatus" }),
    __metadata("design:type", Number)
], CatalogoEstatusTramite.prototype, "idEstatusTramite", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], CatalogoEstatusTramite.prototype, "nombre", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: "" }),
    __metadata("design:type", String)
], CatalogoEstatusTramite.prototype, "descripcion", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], CatalogoEstatusTramite.prototype, "codigo", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "codigo_color", nullable: true }),
    __metadata("design:type", String)
], CatalogoEstatusTramite.prototype, "codigoColor", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "es:actuvi", default: true }),
    __metadata("design:type", Boolean)
], CatalogoEstatusTramite.prototype, "esActivo", void 0);
CatalogoEstatusTramite = __decorate([
    (0, typeorm_1.Entity)({ name: "catalogo_estatus_tramite" })
], CatalogoEstatusTramite);
exports.CatalogoEstatusTramite = CatalogoEstatusTramite;
//# sourceMappingURL=CatalogoEstatusTramite.js.map