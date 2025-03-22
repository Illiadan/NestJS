import { join } from 'path';
import { DataSource, DataSourceOptions } from 'typeorm';

export const ProdDataSourceOptions: DataSourceOptions = {
  type: 'sqlite',
  database: 'prod.sqlite',
  entities: [join(__dirname, '../**/*.entity.js')],
  synchronize: false,
  migrations: ['dist/db/migrations/*.js'],
};

const prodDataSource = new DataSource(ProdDataSourceOptions);
export default prodDataSource;
