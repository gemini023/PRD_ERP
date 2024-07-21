"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateAuthDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const sign_up_dto_1 = require("./sign-up.dto");
class UpdateAuthDto extends (0, mapped_types_1.PartialType)(sign_up_dto_1.CreateAuthDto) {
}
exports.UpdateAuthDto = UpdateAuthDto;
//# sourceMappingURL=sign-in.dto.js.map