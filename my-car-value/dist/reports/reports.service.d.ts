import { Repository } from 'typeorm';
import { User } from '../users/entities/users.entity';
import { CreateReportDto } from './dtos/create-report.dto';
import { GetEstimateDto } from './dtos/get-estimate.dto';
import { Report } from './entities/reports.entity';
export declare class ReportsService {
    private readonly repo;
    constructor(repo: Repository<Report>);
    create(reportDto: CreateReportDto, currentUser: User): Promise<Report>;
    changeApproval(id: string, approved: boolean): Promise<Report>;
    createEstimate(estimateDto: GetEstimateDto): Promise<any>;
}
