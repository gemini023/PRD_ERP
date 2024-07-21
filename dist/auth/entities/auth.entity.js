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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Auth = void 0;
const file_entity_1 = require("../../file/entities/file.entity");
const typeorm_1 = require("typeorm");
let Auth = class Auth {
};
exports.Auth = Auth;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", String)
], Auth.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Auth.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({
        unique: true,
        nullable: false
    }),
    __metadata("design:type", String)
], Auth.prototype, "username", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: false,
        unique: true
    }),
    __metadata("design:type", String)
], Auth.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: false,
    }),
    __metadata("design:type", String)
], Auth.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Auth.prototype, "phoneNumber", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => file_entity_1.File, file => file.id),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Auth.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Auth.prototype, "updatedAt", void 0);
exports.Auth = Auth = __decorate([
    (0, typeorm_1.Entity)("users")
], Auth);
function OnetoOne() {
    throw new Error("Function not implemented.");
}
//# sourceMappingURL=auth.entity.js.map