import { DataSource, DataSourceOptions } from 'typeorm';

export const DevDataSourceOptions: DataSourceOptions = {
  type: 'sqlite',
  database: 'db.sqlite',
  entities: [`${__dirname}/../**/*.entity{.ts,.js}`],
  synchronize: false,
  migrations: ['src/typeorm/migrations/*.ts'],
};

const devDataSource = new DataSource(DevDataSourceOptions);
export default devDataSource;
