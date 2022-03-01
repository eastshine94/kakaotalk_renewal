import React from 'react';
import { RecoilRoot } from 'recoil';
import { ReactQueryProvider } from './react-query-provider';

interface GlobalContextWrapperProps {
  children: React.ReactNode;
}

export default function GlobalContextWrapper({
  children
}: GlobalContextWrapperProps) {
  return (
    <RecoilRoot>
      <ReactQueryProvider>{children}</ReactQueryProvider>
    </RecoilRoot>
  );
}
