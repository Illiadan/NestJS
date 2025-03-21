import { join } from 'path';
import { DataSourceOptions } from 'typeorm';

export const DevDataSourceOptions: DataSourceOptions = {
  type: 'sqlite',
  database: 'db.sqlite',
  entities: [join(__dirname, '../../**/*.entity{.js, .ts}')],
  synchronize: true,
};
