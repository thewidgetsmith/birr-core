// TODO: get PKG_VERSION from package.json
export const PKG_VERSION = '0.1.0';
export const API_VERSION = '0.1.0';
export const API_DOC_TITLE = 'Birr Core API';
export const API_DOC_DESCRIPTION = `\
NestJS application built using during the Advanced Architecture course with
a few added extras such as unit and e2e tests, swagger docs, class validation
and several other variations.
`;

export const environment = () => ({
  port: parseInt(process.env.PORT, 10) || 3000,
  isCorsEnabled: process.env.CORS_ENABLED === 'true',
  isProduction: process.env.NODE_ENV === 'production',

  api: {
    name: API_DOC_TITLE,
    version: API_VERSION,
    description: API_DOC_DESCRIPTION,
    globalPrefix: 'api',
  },

  app: {
    name: 'Birr Core Server',
    slug: 'birr-core/birr-core-server',
    version: PKG_VERSION,
  },

  database: {
    mongo: {
      uri: process.env.MONGO_URI || 'mongodb://localhost:27017/birr-core',
    }
  },

  queue: {
    redis: {
      uri: process.env.REDIS_URI || 'redis://localhost:6379',
    },
  },

  sentry: {
    enabled: process.env.SENTRY_DSN !== undefined,
    dsn: process.env.SENTRY_DSN,
    profilesSampleRate: 1.0,
    tracesSampleRate: 1.0,
  },
});
