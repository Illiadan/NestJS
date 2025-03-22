import { rm } from 'fs/promises';
import { join } from 'path';
import testDataSource from '../src/db/test.data-source';

global.afterEach(async () => {
  try {
    await testDataSource.destroy();
    await rm(join(__dirname, '..', 'test.sqlite'));
    console.log('Test Database removed');
    await testDataSource.initialize();
    console.log('Test Database initialized');
  } catch (err) {}
});
