"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProdDataSourceOptions = void 0;
const path_1 = require("path");
const typeorm_1 = require("typeorm");
exports.ProdDataSourceOptions = {
    type: 'sqlite',
    database: 'prod.sqlite',
    entities: [(0, path_1.join)(__dirname, '../**/*.entity.js')],
    synchronize: false,
    migrations: ['dist/db/migrations/*.js'],
};
const prodDataSource = new typeorm_1.DataSource(exports.ProdDataSourceOptions);
exports.default = prodDataSource;
//# sourceMappingURL=prod.data-source.js.map