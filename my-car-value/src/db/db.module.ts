import { Global, Module } from '@nestjs/common';
import { DataSource } from 'typeorm';
import devDataSource from './dev.data-source';
import prodDataSource from './prod.data-source';
import testDataSource from './test.data-source';

@Global()
@Module({
  providers: [
    {
      provide: DataSource,
      inject: [],
      useFactory: async () => {
        try {
          if (process.env.NODE_ENV === 'development') {
            await devDataSource.initialize();
            console.log('Development Database connected successfully');
            return devDataSource;
          }

          if (process.env.NODE_ENV === 'test') {
            await testDataSource.initialize();
            console.log('Test Database connected successfully');
            return testDataSource;
          }

          if (process.env.NODE_ENV === 'production') {
            await prodDataSource.initialize();
            console.log('Production Database connected successfully');
            return prodDataSource;
          }

          throw new Error('unknown datasource environment');
        } catch (err) {
          console.log('Error connecting to database');
        }
      },
    },
  ],
  exports: [DataSource],
})
export class DbModule {}
