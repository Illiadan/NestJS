import { User } from 'src/users/users.entity';
import { Repository } from 'typeorm';
import { CreateReportDto } from './dtos/create-report.dto';
import { GetEstimateDto } from './dtos/get-estimate.dto';
import { Report } from './reports.entity';
export declare class ReportsService {
    private readonly repo;
    constructor(repo: Repository<Report>);
    create(reportDto: CreateReportDto, currentUser: User): Promise<Report>;
    changeApproval(id: string, approved: boolean): Promise<Report>;
    createEstimate(estimateDto: GetEstimateDto): Promise<any>;
}
