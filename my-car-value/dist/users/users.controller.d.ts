import { CreateUserDto } from './dtos/create-user.dto';
import { UpdateUserDto } from './dtos/update-user.dto';
import { UsersService } from './users.service';
export declare class UsersController {
    private usersService;
    constructor(usersService: UsersService);
    createUser(body: CreateUserDto): Promise<import("./users.entity").User>;
    findUser(id: string): Promise<import("./users.entity").User>;
    findAllUsers(email: string): Promise<import("./users.entity").User[]>;
    updateUser(id: string, body: UpdateUserDto): Promise<import("./users.entity").User>;
    removeUser(id: string): Promise<import("./users.entity").User>;
}
