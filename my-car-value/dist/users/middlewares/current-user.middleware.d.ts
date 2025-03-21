import { NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
import { User } from '../entities/users.entity';
import { UsersService } from '../users.service';
interface CurrentUserRequest extends Request {
    currentUser?: User;
}
export declare class CurrentUserMiddleware implements NestMiddleware {
    private usersService;
    constructor(usersService: UsersService);
    use(req: CurrentUserRequest, res: Response, next: NextFunction): Promise<void>;
}
export {};
