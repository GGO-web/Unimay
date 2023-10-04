import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { App } from './App';

import './scss/style.scss';
import { ErrorBoundary } from '@components/ErrorBoundary/ErrorBoundary';
import { Spinner } from '@components/Spinner/SpinnerIcon';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <ErrorBoundary message={'Internal error'}>
    <Suspense fallback={<Spinner />}>
      <React.StrictMode>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </React.StrictMode>
    </Suspense>
  </ErrorBoundary>
);
