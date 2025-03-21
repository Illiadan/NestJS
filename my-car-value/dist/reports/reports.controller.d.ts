import { User } from '../users/entities/users.entity';
import { ApproveReportDto } from './dtos/approve-report.dto';
import { CreateReportDto } from './dtos/create-report.dto';
import { GetEstimateDto } from './dtos/get-estimate.dto';
import { ReportsService } from './reports.service';
export declare class ReportsController {
    private readonly reportsService;
    constructor(reportsService: ReportsService);
    getEstimate(query: GetEstimateDto): Promise<any>;
    createReport(body: CreateReportDto, user: User): Promise<import("./entities/reports.entity").Report>;
    approveReport(id: string, body: ApproveReportDto): Promise<import("./entities/reports.entity").Report>;
}
