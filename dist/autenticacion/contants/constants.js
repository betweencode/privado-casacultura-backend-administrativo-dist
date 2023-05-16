"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurrentUser = exports.Public = exports.IS_PUBLIC_KEY = exports.jwtConstants = void 0;
const common_1 = require("@nestjs/common");
const common_2 = require("@nestjs/common");
exports.jwtConstants = {
    secret: 'betweencode',
};
exports.IS_PUBLIC_KEY = 'LLAVEPUBLICABETWEENCODE';
const Public = () => (0, common_1.SetMetadata)(exports.IS_PUBLIC_KEY, true);
exports.Public = Public;
exports.CurrentUser = (0, common_2.createParamDecorator)((data, ctx) => {
    try {
        const request = ctx.switchToHttp().getRequest();
        return request.user;
    }
    catch (error) {
        throw new common_1.ForbiddenException();
    }
});
//# sourceMappingURL=constants.js.map