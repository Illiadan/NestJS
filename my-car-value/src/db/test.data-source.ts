import { DataSource, DataSourceOptions } from 'typeorm';

export const TestDataSourceOptions: DataSourceOptions = {
  type: 'sqlite',
  database: 'test.sqlite',
  entities: [`${__dirname}/../**/*.entity{.ts,.js}`],
  synchronize: false,
  migrations: ['src/db/migrations/*.ts'],
  migrationsRun: true,
};

const testDataSource = new DataSource(TestDataSourceOptions);
export default testDataSource;
