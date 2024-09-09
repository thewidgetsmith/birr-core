import { Test, TestingModule } from '@nestjs/testing';
import { BirrNotificationsController } from './birr-notifications.controller';
import { BirrNotificationsService } from './birr-notifications.service';

describe('BirrNotificationsController', () => {
  let birrNotificationsController: BirrNotificationsController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [BirrNotificationsController],
      providers: [BirrNotificationsService],
    }).compile();

    birrNotificationsController = app.get<BirrNotificationsController>(BirrNotificationsController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(birrNotificationsController.getHello()).toBe('Hello World!');
    });
  });
});
