import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/App.tsx';
import '~/shared/configs/i18n/i18n';
import { BrowserRouter } from 'react-router-dom';
import { ErrorBoundary } from '~/shared/ui/ErrorBoundary';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <ErrorBoundary>
      <Suspense fallback={''}>
        <App />
      </Suspense>
    </ErrorBoundary>
  </BrowserRouter>,
);
