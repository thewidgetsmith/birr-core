import { LoggerService } from '../src/logger.service';
import { ILogger } from '../src/types';

export const MockedLogger: ILogger = {
  debug: jest.fn(),
  info: jest.fn(),
  warn: jest.fn(),
  error: jest.fn(),
  child: jest.fn(() => MockedLogger),
};


export const MockedLoggerProvider = {
  provide: LoggerService,
  useClass: jest.fn(() => ({
    debug: jest.fn(),
    info: jest.fn(),
    warn: jest.fn(),
    error: jest.fn(),
    child: jest.fn(),
  })),
};
