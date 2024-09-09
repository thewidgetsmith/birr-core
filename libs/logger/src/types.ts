import type { Format } from 'logform';
import { LogLevel } from './constants';

export interface ILogger {
  debug: (message: string, params?: Record<string, unknown>) => void;
  info: (message: string, params?: Record<string, unknown>) => void;
  warn: (message: string, params?: Record<string, unknown>) => void;
  error: (
    message: string,
    err?: Error,
    params?: Record<string, unknown>
  ) => void;
  child: (metadata?: Pick<LoggerOptions, 'metadata'>) => ILogger;
}

export interface LogEntry {
  level: string;
  message: string;
  [optionName: string]: unknown;
}

export interface LoggerOptions {
  component: string;
  logLevel?: LogLevel;
  isProduction: boolean;
  metadata?: Record<string, unknown>;
  additionalFormats?: Format[];
  additionalDevelopmentFormats?: Format[];
}

export interface LoggerMetadata {
  service: string;
}

export interface LoggerModuleOptions {
  component: string;
  logLevel?: LogLevel;
  isProduction?: boolean;
  metadata?: Record<string, unknown>;
}
