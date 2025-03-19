import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import * as request from 'supertest';
import { App } from 'supertest/types';
import { AppModule } from './../src/app.module';

describe('Authentication System', () => {
  let app: INestApplication<App>;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('handles a signup request', () => {
    const testEmail = 'test@test.com';

    return request(app.getHttpServer())
      .post('/auth/signup')
      .send({ email: testEmail, password: 'test' })
      .expect(201)
      .then((res) => {
        const { id, email } = res.body;
        expect(id).toBeDefined();
        expect(email).toEqual(testEmail);
      });
  });

  it('signs up as new user and then get the currently logged in user', async () => {
    const testEmail = 'test1@test.com';
    const testPassword = 'test1';

    const res = await request(app.getHttpServer())
      .post('/auth/signup')
      .send({ email: testEmail, password: testPassword })
      .expect(201);

    const cookie = res.get('Set-Cookie');
    expect(cookie).toBeDefined();

    const { body } = await request(app.getHttpServer())
      .get('/auth/currentuser')
      .set('Cookie', cookie!)
      .expect(200);

    expect(body.email).toEqual(testEmail);
  });
});
