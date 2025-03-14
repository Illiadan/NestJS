import { CallHandler, ExecutionContext, NestInterceptor } from '@nestjs/common';
import { UsersService } from '../users.service';
export declare class CurrentUserInterceptor implements NestInterceptor {
    private usersService;
    constructor(usersService: UsersService);
    intercept(context: ExecutionContext, next: CallHandler<any>): Promise<import("rxjs").Observable<any>>;
}
