'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React, { FC } from 'react';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
});

interface IProps {
  children: React.ReactNode;
}

export const ClientLayout: FC<IProps> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
