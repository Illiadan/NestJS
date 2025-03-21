import { Report } from '../../reports/entities/reports.entity';
export declare class User {
    id: number;
    email: string;
    password: string;
    admin: boolean;
    reports: Report[];
    logInsert(): void;
    logUpdate(): void;
    logRemove(): void;
}
