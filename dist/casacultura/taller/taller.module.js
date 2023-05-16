"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TallerModule = void 0;
const taller_1 = require("./models/taller");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const tallerController_1 = require("./controllers/tallerController");
const tallerServices_1 = require("./services/tallerServices");
const personas_module_1 = require("../personas/personas.module");
let TallerModule = class TallerModule {
};
TallerModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([taller_1.Taller]), personas_module_1.PersonasModule],
        controllers: [tallerController_1.TallerController],
        providers: [tallerServices_1.TallerServices],
        exports: [typeorm_1.TypeOrmModule]
    })
], TallerModule);
exports.TallerModule = TallerModule;
//# sourceMappingURL=taller.module.js.map