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
exports.CategoriaTallerServices = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const categoriaTaller_1 = require("../models/categoriaTaller");
const typeorm_2 = require("typeorm");
let CategoriaTallerServices = class CategoriaTallerServices {
    constructor(repository) {
        this.repository = repository;
    }
    async getAll() {
        return await this.repository.find({ order: { idCategoriaTaller: 'asc' } });
    }
    async getAllActivos() {
        return await this.repository.find({ order: { idCategoriaTaller: 'asc' }, where: { esActivo: true } });
    }
    async getAllActivoswithCategory() {
        return await this.repository.find({ order: { idCategoriaTaller: 'asc' }, where: { esActivo: true }, relations: { talleres: true } });
    }
    async getById(idtaller) {
        return await this.repository.findOne({ where: { idCategoriaTaller: idtaller } });
    }
    async gurdar(obj) {
        const resultado = { resultado: false, mensaje: "No se pudo guardar el registor", datos: undefined };
        try {
            const data = await this.repository.save(obj);
            resultado.mensaje = "Registro guardado con exito";
            resultado.resultado = true;
            resultado.datos = data;
        }
        catch (e) {
        }
        return resultado;
    }
    async eliminandoRegistro(id) {
        const resultado = { resultado: false, mensaje: "No se puede eliminar el registro ya que tiene relacion con otros registros", datos: undefined };
        try {
            const data = await this.repository.delete({ idCategoriaTaller: id });
            resultado.mensaje = "Registro eliminado con exito";
            resultado.resultado = true;
            resultado.datos = data;
        }
        catch (e) {
        }
        return resultado;
    }
};
CategoriaTallerServices = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(categoriaTaller_1.CategoriaTaller)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], CategoriaTallerServices);
exports.CategoriaTallerServices = CategoriaTallerServices;
//# sourceMappingURL=categoriaTallerServices.js.map