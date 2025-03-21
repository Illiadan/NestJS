import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../users/entities/users.entity';
import { CreateReportDto } from './dtos/create-report.dto';
import { GetEstimateDto } from './dtos/get-estimate.dto';
import { Report } from './entities/reports.entity';

@Injectable()
export class ReportsService {
  constructor(
    @InjectRepository(Report) private readonly repo: Repository<Report>,
  ) {}

  create(reportDto: CreateReportDto, currentUser: User) {
    const report = this.repo.create(reportDto);
    report.user = currentUser;

    return this.repo.save(report);
  }

  async changeApproval(id: string, approved: boolean) {
    const report = await this.repo.findOne({ where: { id: parseInt(id) } });

    if (!report) {
      throw new NotFoundException('report not found');
    }

    report.approved = approved;

    return this.repo.save(report);
  }

  async createEstimate(estimateDto: GetEstimateDto) {
    return this.repo
      .createQueryBuilder()
      .select('AVG(price)', 'price')
      .where('make = :make', { make: estimateDto.make })
      .andWhere('model = :model', { model: estimateDto.model })
      .andWhere('lat - :lat BETWEEN -5 AND 5', { lat: estimateDto.lat })
      .andWhere('lon - :lon BETWEEN -5 AND 5', { lon: estimateDto.lon })
      .andWhere('year - :year BETWEEN -3 AND 3', { year: estimateDto.year })
      .andWhere('approved IS TRUE')
      .orderBy('ABS(mileage - :mileage)', 'DESC')
      .setParameters({ mileage: estimateDto.mileage })
      .limit(3)
      .getRawOne();
  }
}
