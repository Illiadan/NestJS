"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const dev_data_source_1 = require("./dev.data-source");
const prod_data_source_1 = require("./prod.data-source");
const test_data_source_1 = require("./test.data-source");
let DbModule = class DbModule {
};
exports.DbModule = DbModule;
exports.DbModule = DbModule = __decorate([
    (0, common_1.Global)(),
    (0, common_1.Module)({
        providers: [
            {
                provide: typeorm_1.DataSource,
                inject: [],
                useFactory: async () => {
                    try {
                        if (process.env.NODE_ENV === 'development') {
                            await dev_data_source_1.default.initialize();
                            console.log('Development Database connected successfully');
                            return dev_data_source_1.default;
                        }
                        if (process.env.NODE_ENV === 'test') {
                            await test_data_source_1.default.initialize();
                            console.log('Test Database connected successfully');
                            return test_data_source_1.default;
                        }
                        if (process.env.NODE_ENV === 'production') {
                            await prod_data_source_1.default.initialize();
                            console.log('Production Database connected successfully');
                            return prod_data_source_1.default;
                        }
                        throw new Error('unknown datasource environment');
                    }
                    catch (err) {
                        console.log('Error connecting to database');
                    }
                },
            },
        ],
        exports: [typeorm_1.DataSource],
    })
], DbModule);
//# sourceMappingURL=db.module.js.map