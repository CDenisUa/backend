import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { MessagesModule } from 'src/messages/messages.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [MassagesModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/messages (GET)', () => {
    return request(app.getHttpServer())
      .get('/messages')
      .expect(200)
      .expect('Hello World!');
  });
});
