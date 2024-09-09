import { Test, TestingModule } from '@nestjs/testing';
import { BirrSchedulerController } from './birr-scheduler.controller';
import { BirrSchedulerService } from './birr-scheduler.service';

describe('BirrSchedulerController', () => {
  let birrSchedulerController: BirrSchedulerController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [BirrSchedulerController],
      providers: [BirrSchedulerService],
    }).compile();

    birrSchedulerController = app.get<BirrSchedulerController>(BirrSchedulerController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(birrSchedulerController.getHello()).toBe('Hello World!');
    });
  });
});
