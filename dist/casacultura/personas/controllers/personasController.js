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
exports.PersonasController = void 0;
const common_1 = require("@nestjs/common");
const personas_services_1 = require("../services/personas.services");
let PersonasController = class PersonasController {
    constructor(personasPrd) {
        this.personasPrd = personasPrd;
    }
    async getAll() {
        return await this.personasPrd.getAll();
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PersonasController.prototype, "getAll", null);
PersonasController = __decorate([
    (0, common_1.Controller)("personas"),
    __metadata("design:paramtypes", [personas_services_1.PersonasServices])
], PersonasController);
exports.PersonasController = PersonasController;
//# sourceMappingURL=personasController.js.map