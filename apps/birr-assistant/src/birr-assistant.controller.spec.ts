import { Test, TestingModule } from '@nestjs/testing';
import { BirrAssistantController } from './birr-assistant.controller';
import { BirrAssistantService } from './birr-assistant.service';

describe('BirrAssistantController', () => {
  let birrAssistantController: BirrAssistantController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [BirrAssistantController],
      providers: [BirrAssistantService],
    }).compile();

    birrAssistantController = app.get<BirrAssistantController>(BirrAssistantController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(birrAssistantController.getHello()).toBe('Hello World!');
    });
  });
});
