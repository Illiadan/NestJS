"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestDataSourceOptions = void 0;
const reports_entity_1 = require("../../reports/entities/reports.entity");
const users_entity_1 = require("../../users/entities/users.entity");
exports.TestDataSourceOptions = {
    type: 'sqlite',
    database: 'test.sqlite',
    entities: [users_entity_1.User, reports_entity_1.Report],
    synchronize: true,
};
//# sourceMappingURL=test.data-source.js.map