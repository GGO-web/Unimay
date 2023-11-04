import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { App } from './App';

import './scss/style.scss';
import { ErrorBoundary } from '@components/ErrorBoundary/ErrorBoundary';
import { Spinner } from '@components/Spinner/SpinnerIcon';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

// Create a client
const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <ErrorBoundary message={'Internal error'}>
    <Suspense fallback={<Spinner />}>
      <React.StrictMode>
        <BrowserRouter>
          <QueryClientProvider client={queryClient}>
            <App />
            <ReactQueryDevtools initialIsOpen={false} />
          </QueryClientProvider>
        </BrowserRouter>
      </React.StrictMode>
    </Suspense>
  </ErrorBoundary>
);
