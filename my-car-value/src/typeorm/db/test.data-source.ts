import { DataSourceOptions } from 'typeorm';
import { Report } from '../../reports/entities/reports.entity';
import { User } from '../../users/entities/users.entity';

export const TestDataSourceOptions: DataSourceOptions = {
  type: 'sqlite',
  database: 'test.sqlite',
  entities: [User, Report],
  synchronize: true,
};
