'use client';

import { PATHS } from '@/common/constants/PATHS';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';
import { Toggle } from '../ui/Toggle';

export const Navigation = () => {
  const pathname = usePathname();
  const isPostDetailPage = pathname.startsWith(PATHS.POST.ROOT);

  return (
    <nav className='flex items-center justify-between'>
      <h1
        className={clsx(
          'text-2xl font-bold transition-all duration-200',
          isPostDetailPage ? 'gradient-text' : 'text-secondary'
        )}
      >
        overreacted
      </h1>
      <Toggle label='Toggle Theme' />
    </nav>
  );
};
