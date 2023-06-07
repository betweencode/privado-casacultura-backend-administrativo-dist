"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CatalogoEstatusTramiteModule = void 0;
const CatalogoEstatusTramite_1 = require("./models/CatalogoEstatusTramite");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
let CatalogoEstatusTramiteModule = class CatalogoEstatusTramiteModule {
};
CatalogoEstatusTramiteModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([CatalogoEstatusTramite_1.CatalogoEstatusTramite])],
        exports: [typeorm_1.TypeOrmModule]
    })
], CatalogoEstatusTramiteModule);
exports.CatalogoEstatusTramiteModule = CatalogoEstatusTramiteModule;
//# sourceMappingURL=catalogoEstatusTramite.module.js.map