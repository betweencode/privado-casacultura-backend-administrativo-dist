"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const path_1 = require("path");
const platform_fastify_1 = require("@nestjs/platform-fastify");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, new platform_fastify_1.FastifyAdapter());
    app.enableCors();
    app.useStaticAssets({
        root: (0, path_1.join)(__dirname, '..', 'public'),
        prefix: '/public/',
    });
    app.setViewEngine({
        engine: {
            handlebars: require('handlebars'),
        },
        viewExt: 'hbs',
        templates: (0, path_1.join)(__dirname, '..', 'views'),
    });
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map