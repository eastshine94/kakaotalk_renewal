import React from 'react';
import { RecoilRoot } from 'recoil';
import GlobalErrorBoundary from './GlobalErrorBoundary';
import { ReactQueryProvider } from './react-query-provider';

interface GlobalContextWrapperProps {
  children: React.ReactNode;
}

export default function GlobalContextWrapper({
  children
}: GlobalContextWrapperProps) {
  return (
    <GlobalErrorBoundary>
      <RecoilRoot>
        <ReactQueryProvider>{children}</ReactQueryProvider>
      </RecoilRoot>
    </GlobalErrorBoundary>
  );
}
