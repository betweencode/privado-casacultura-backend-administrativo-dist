"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AwsS3ComunicacionServices = void 0;
const common_1 = require("@nestjs/common");
const AWS = require("aws-sdk");
const AWS_S3_NOMBRE_BUCKET = "bucketcasacultura";
const s3 = new AWS.S3({
    accessKeyId: "AKIA2UWFGEWVJDKQNGEU",
    secretAccessKey: "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"
});
let AwsS3ComunicacionServices = class AwsS3ComunicacionServices {
    async subirArchivo(nombreArchivo, base64) {
        const urlKey = `almacenamientogeneral/${nombreArchivo}`;
        const buffer = Uint8Array.from(atob(base64), c => c.charCodeAt(0));
        const params = {
            Body: buffer,
            Bucket: AWS_S3_NOMBRE_BUCKET,
            Key: urlKey
        };
        return await s3.putObject(params).promise();
    }
};
AwsS3ComunicacionServices = __decorate([
    (0, common_1.Injectable)()
], AwsS3ComunicacionServices);
exports.AwsS3ComunicacionServices = AwsS3ComunicacionServices;
//# sourceMappingURL=AwsS3Comunicacion.services.js.map