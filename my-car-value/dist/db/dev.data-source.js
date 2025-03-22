"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DevDataSourceOptions = void 0;
const typeorm_1 = require("typeorm");
exports.DevDataSourceOptions = {
    type: 'sqlite',
    database: 'db.sqlite',
    entities: [`${__dirname}/../**/*.entity{.ts,.js}`],
    synchronize: false,
    migrations: ['src/typeorm/migrations/*.ts'],
};
const devDataSource = new typeorm_1.DataSource(exports.DevDataSourceOptions);
exports.default = devDataSource;
//# sourceMappingURL=dev.data-source.js.map