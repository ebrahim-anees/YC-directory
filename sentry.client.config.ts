import * as Sentry from '@sentry/nextjs';

Sentry.init({
  dsn: 'https://933fe46b1ae5ac4adf0a7d76b008f66e@o4508759840194560.ingest.de.sentry.io/4508759857430608',

  integrations: [
    Sentry.replayIntegration(),
    Sentry.feedbackIntegration({
      colorScheme: 'system',
    }),
  ],
  // Session Replay
  replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
  replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
  debug: true,
});
