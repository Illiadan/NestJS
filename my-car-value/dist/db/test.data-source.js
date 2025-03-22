"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestDataSourceOptions = void 0;
const typeorm_1 = require("typeorm");
exports.TestDataSourceOptions = {
    type: 'sqlite',
    database: 'test.sqlite',
    entities: [`${__dirname}/../**/*.entity{.ts,.js}`],
    synchronize: false,
    migrations: ['src/db/migrations/*.ts'],
    migrationsRun: true,
};
const testDataSource = new typeorm_1.DataSource(exports.TestDataSourceOptions);
exports.default = testDataSource;
//# sourceMappingURL=test.data-source.js.map