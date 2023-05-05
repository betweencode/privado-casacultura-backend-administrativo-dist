"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VersionesModule = void 0;
const Versionesxmodulos_1 = require("./models/Versionesxmodulos");
const Versiones_1 = require("./models/Versiones");
const VersionesServices_1 = require("./services/VersionesServices");
const versioneController_1 = require("./controllers/versioneController");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
let VersionesModule = class VersionesModule {
};
VersionesModule = __decorate([
    (0, common_1.Module)({
        controllers: [versioneController_1.VersionesController],
        providers: [VersionesServices_1.VersionesServices],
        imports: [typeorm_1.TypeOrmModule.forFeature([Versiones_1.Versiones, Versionesxmodulos_1.Versionesxmodulos])],
        exports: [typeorm_1.TypeOrmModule, VersionesServices_1.VersionesServices]
    })
], VersionesModule);
exports.VersionesModule = VersionesModule;
//# sourceMappingURL=versiones.module.js.map