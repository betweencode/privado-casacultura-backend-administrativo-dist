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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TallerController = void 0;
const personas_services_1 = require("./../../personas/services/personas.services");
const constants_1 = require("./../../../autenticacion/contants/constants");
const common_1 = require("@nestjs/common");
const tallerServices_1 = require("../services/tallerServices");
const taller_1 = require("../models/taller");
let TallerController = class TallerController {
    constructor(tallerPrd, personasPrd) {
        this.tallerPrd = tallerPrd;
        this.personasPrd = personasPrd;
    }
    async getAll() {
        return await this.tallerPrd.getAll();
    }
    async guardar(request) {
        return await this.tallerPrd.guardar(request);
    }
    async getTalleresByPersona(usuarioSesion) {
        return await this.personasPrd.getTalleresPorPeriodoPersona(usuarioSesion.correo);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TallerController.prototype, "getAll", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [taller_1.Taller]),
    __metadata("design:returntype", Promise)
], TallerController.prototype, "guardar", null);
__decorate([
    (0, common_1.Get)("periodoalumno"),
    __param(0, (0, constants_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TallerController.prototype, "getTalleresByPersona", null);
TallerController = __decorate([
    (0, common_1.Controller)("talleres"),
    __metadata("design:paramtypes", [tallerServices_1.TallerServices,
        personas_services_1.PersonasServices])
], TallerController);
exports.TallerController = TallerController;
//# sourceMappingURL=tallerController.js.map