"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubmodulosModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const submodulosController_1 = require("./controllers/submodulosController");
const Submodulos_1 = require("./models/Submodulos");
const submodulosServices_1 = require("./services/submodulosServices");
let SubmodulosModule = class SubmodulosModule {
};
SubmodulosModule = __decorate([
    (0, common_1.Module)({
        controllers: [submodulosController_1.SubmodulosController],
        providers: [submodulosServices_1.SubmodulosServices],
        imports: [typeorm_1.TypeOrmModule.forFeature([Submodulos_1.Submodulos])],
        exports: [typeorm_1.TypeOrmModule, submodulosServices_1.SubmodulosServices]
    })
], SubmodulosModule);
exports.SubmodulosModule = SubmodulosModule;
//# sourceMappingURL=submodulos.module.js.map