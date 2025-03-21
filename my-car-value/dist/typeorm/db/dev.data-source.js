"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DevDataSourceOptions = void 0;
const path_1 = require("path");
exports.DevDataSourceOptions = {
    type: 'sqlite',
    database: 'db.sqlite',
    entities: [(0, path_1.join)(__dirname, '../../**/*.entity{.js, .ts}')],
    synchronize: true,
};
//# sourceMappingURL=dev.data-source.js.map