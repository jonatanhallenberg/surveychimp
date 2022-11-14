import * as express from 'express';
import { handleGlobalErrors } from '@surveychimp/surveychimp-lib';
import surveyRouter from './routes/surveyRouter';
import * as Sentry from "@sentry/node";
import * as Tracing from "@sentry/tracing";

const app = express();

Sentry.init({
    dsn: "https://975016e12f83420c81f2d1fa7e83cb17@o4504152294162432.ingest.sentry.io/4504157479895040",
    integrations: [
        // enable HTTP calls tracing
        new Sentry.Integrations.Http({ tracing: true }),
        // enable Express.js middleware tracing
        new Tracing.Integrations.Express({ app }),
    ],

    // Set tracesSampleRate to 1.0 to capture 100%
    // of transactions for performance monitoring.
    // We recommend adjusting this value in production
    tracesSampleRate: 1.0,
});

// RequestHandler creates a separate execution context using domains, so that every
// transaction/span/breadcrumb is attached to its own Hub instance
app.use(Sentry.Handlers.requestHandler());
// TracingHandler creates a trace for every incoming request
app.use(Sentry.Handlers.tracingHandler());

//Required to parse json body
app.use(express.json());

//Routers
app.use(surveyRouter);

app.use(Sentry.Handlers.errorHandler());

//Global error handler
app.use(handleGlobalErrors);

export default app;