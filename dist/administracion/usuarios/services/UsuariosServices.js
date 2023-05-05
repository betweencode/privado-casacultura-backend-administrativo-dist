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
exports.UsuariosSevices = void 0;
const roles_service_1 = require("./../../../catalogos/roles/services/roles.service");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const Usuarios_1 = require("../models/Usuarios");
let UsuariosSevices = class UsuariosSevices {
    constructor(usuariosRepository, rolesPrd) {
        this.usuariosRepository = usuariosRepository;
        this.rolesPrd = rolesPrd;
    }
    async getAll() {
        return await this.usuariosRepository.find({ relations: { rol: { permisosxsubmodulos: true } } });
    }
    async getById(id) {
        return await this.usuariosRepository.findOne({ where: { id: id } });
    }
    async getUsuarioByEmpresa(idEmpresa) {
        return await this.usuariosRepository.find({ where: { rol: { empresas: { idEmpresa: idEmpresa } } } });
    }
    async getUsuarioByEmail(email) {
        const where = { correo: email, rol: true };
        return await this.usuariosRepository.findOne({ relations: { rol: true }, where: { correo: email } });
    }
    async guardar(usuario) {
        return await this.usuariosRepository.save(usuario);
    }
    async modificar(id, usuario) {
        const user = await this.getById(id);
        usuario.id = id;
        usuario.correo = user.correo === usuario.correo ? undefined : usuario.correo;
        return await this.usuariosRepository.save(usuario);
    }
    async eliminar(id) {
        const user = await this.getById(id);
        user.correo = undefined;
        user.esActivo = false;
        return await this.usuariosRepository.save(user);
        ;
    }
    async eliminarMasivo(usuarios) {
        usuarios.forEach(async (s) => {
            const user = await this.getById(s.id);
            user.correo = undefined;
            user.esActivo = false;
            await this.usuariosRepository.save(user);
        });
        return { "respuesta": "Operación realizada con éxito" };
    }
    async registrarUsuario(usuario) {
        const resultado = { resultado: false, mensaje: "" };
        const roles = await this.rolesPrd.obtenerRolesInicialesRegister("registrar");
        usuario.rol = roles;
        const numero = await this.usuariosRepository.count({ where: { correo: usuario.correo } });
        if (!numero) {
            this.usuariosRepository.save(usuario);
            resultado.resultado = true;
            resultado.mensaje = "Usuario registrado correctamente";
        }
        else {
            resultado.resultado = false;
            resultado.mensaje = "El correo ingresado ya se encuentra en el sistema, favor de validar";
        }
        return resultado;
    }
};
UsuariosSevices = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(Usuarios_1.Usuarios)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        roles_service_1.RolesService])
], UsuariosSevices);
exports.UsuariosSevices = UsuariosSevices;
//# sourceMappingURL=UsuariosServices.js.map