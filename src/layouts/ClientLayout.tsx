'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import clsx from 'clsx';
import { Montserrat } from 'next/font/google';
import React, { FC } from 'react';
const montserrat = Montserrat({ subsets: ['latin'] });

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
    <QueryClientProvider client={queryClient}>
      <main className={clsx(montserrat.className)}>{children}</main>
    </QueryClientProvider>
  );
};
