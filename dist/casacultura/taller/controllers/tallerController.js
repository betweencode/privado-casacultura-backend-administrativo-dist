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
exports.TallerController = void 0;
const common_1 = require("@nestjs/common");
const tallerServices_1 = require("../services/tallerServices");
let TallerController = class TallerController {
    constructor(tallerPrd) {
        this.tallerPrd = tallerPrd;
    }
    async getAll() {
        return await this.tallerPrd.getAll();
    }
};
__decorate([
    (0, common_1.Get)(""),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TallerController.prototype, "getAll", null);
TallerController = __decorate([
    (0, common_1.Controller)("talleres"),
    __metadata("design:paramtypes", [tallerServices_1.TallerServices])
], TallerController);
exports.TallerController = TallerController;
//# sourceMappingURL=tallerController.js.map