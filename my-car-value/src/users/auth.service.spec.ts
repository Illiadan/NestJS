import { BadRequestException } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import { AuthService } from './auth.service';
import { User } from './entities/users.entity';
import { UsersService } from './users.service';

describe('AuthService', () => {
  let service: AuthService;
  let fakeUsersService: Partial<UsersService>;

  beforeEach(async () => {
    const users: User[] = [];
    fakeUsersService = {
      find: (email: string) => {
        const filteredUsers = users.filter((user) => user.email === email);
        return Promise.resolve(filteredUsers);
      },
      create: (email: string, password: string) => {
        const user = {
          id: Math.floor(Math.random() * 999999),
          email,
          password,
        } as User;
        users.push(user);
        return Promise.resolve(user);
      },
    };

    const module = await Test.createTestingModule({
      providers: [
        AuthService,
        {
          provide: UsersService,
          useValue: fakeUsersService,
        },
      ],
    }).compile();

    service = module.get(AuthService);
  });

  it('create an instance of auth service', async () => {
    expect(service).toBeDefined();
  });

  it('creates a new user with a salted and hashed password', async () => {
    const user = await service.signup('test@test.com', 'test');
    expect(user.password).not.toEqual('test');

    const [salt, hash] = user.password.split('.');
    expect(salt).toBeDefined();
    expect(hash).toBeDefined();
  });

  it('throws an error if user signs up with an email that is in use', async () => {
    const user = await service.signup('test@test.com', 'test');
    expect(user).toBeDefined();

    await expect(service.signup('test@test.com', 'test')).rejects.toThrow(
      BadRequestException,
    );
  });

  it('returns a user if a valid password is provided', async () => {
    await service.signup('test1@test.com', 'test1');

    const user = await service.signin('test1@test.com', 'test1');
    expect(user).toBeDefined();
  });

  it('throws an error if signin is called with an unused email', async () => {
    await expect(service.signin('test2@test.com', 'pass')).rejects.toThrow(
      BadRequestException,
    );
  });

  it('throws an error if an invalid password is provided', async () => {
    await service.signup('test3@test.com', 'test3');

    await expect(service.signin('test3@test.com', 'admin')).rejects.toThrow(
      BadRequestException,
    );
  });
});
