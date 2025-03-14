"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersModule = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const typeorm_1 = require("@nestjs/typeorm");
const auth_service_1 = require("./auth.service");
const current_user_interceptor_1 = require("./interceptors/current-user.interceptor");
const users_controller_1 = require("./users.controller");
const users_entity_1 = require("./users.entity");
const users_service_1 = require("./users.service");
let UsersModule = class UsersModule {
};
exports.UsersModule = UsersModule;
exports.UsersModule = UsersModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([users_entity_1.User])],
        providers: [
            auth_service_1.AuthService,
            users_service_1.UsersService,
            {
                provide: core_1.APP_INTERCEPTOR,
                useClass: current_user_interceptor_1.CurrentUserInterceptor,
            },
        ],
        controllers: [users_controller_1.UsersController],
    })
], UsersModule);
//# sourceMappingURL=users.module.js.map