import { User } from '../../users/entities/users.entity';
export declare class Report {
    id: number;
    approved: boolean;
    price: number;
    make: string;
    model: string;
    year: number;
    lon: number;
    lat: number;
    mileage: number;
    user: User;
}
