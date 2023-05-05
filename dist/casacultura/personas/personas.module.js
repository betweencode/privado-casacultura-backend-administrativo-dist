"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PersonasModule = void 0;
const typeorm_1 = require("@nestjs/typeorm");
const common_1 = require("@nestjs/common");
const personasController_1 = require("./controllers/personasController");
const personas_services_1 = require("./services/personas.services");
const personas_1 = require("./models/personas");
let PersonasModule = class PersonasModule {
};
PersonasModule = __decorate([
    (0, common_1.Module)({
        controllers: [personasController_1.PersonasController],
        providers: [personas_services_1.PersonasServices],
        imports: [typeorm_1.TypeOrmModule.forFeature([personas_1.Personas])],
        exports: [typeorm_1.TypeOrmModule]
    })
], PersonasModule);
exports.PersonasModule = PersonasModule;
//# sourceMappingURL=personas.module.js.map