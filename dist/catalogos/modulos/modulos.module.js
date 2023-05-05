"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModulosModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const modulosController_1 = require("./controllers/modulosController");
const Modulos_1 = require("./models/Modulos");
const modulosServices_1 = require("./services/modulosServices");
let ModulosModule = class ModulosModule {
};
ModulosModule = __decorate([
    (0, common_1.Module)({
        controllers: [modulosController_1.ModulosController],
        providers: [modulosServices_1.ModulosServices],
        imports: [
            typeorm_1.TypeOrmModule.forFeature([Modulos_1.Modulos])
        ],
        exports: [typeorm_1.TypeOrmModule, modulosServices_1.ModulosServices]
    })
], ModulosModule);
exports.ModulosModule = ModulosModule;
//# sourceMappingURL=modulos.module.js.map