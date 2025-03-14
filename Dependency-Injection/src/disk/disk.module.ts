import { Module } from '@nestjs/common';
import { PowerModule } from 'src/power/power.module';
import { DiskService } from './disk.service';

@Module({
  providers: [DiskService],
  exports: [DiskService],
  imports: [PowerModule],
})
export class DiskModule {}
