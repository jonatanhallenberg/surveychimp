import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing";

import App from './app/app';
console.log(process.env);
Sentry.init({
    dsn: "https://722f548cbf6d4215ad8c49d543939cda@o4504152294162432.ingest.sentry.io/4504157459316736",
    integrations: [new BrowserTracing()],
  
    // Set tracesSampleRate to 1.0 to capture 100%
    // of transactions for performance monitoring.
    // We recommend adjusting this value in production
    tracesSampleRate: 1.0,
  });
  

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <StrictMode><BrowserRouter><App /></BrowserRouter></StrictMode>
);
