'use client';

import { PATHS } from '@/common/constants/PATHS';
import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Toggle } from '../ui/Toggle';
import { useNavigation } from './useNavigation';

export const Navigation = () => {
  const pathname = usePathname();
  const isPostDetailPage = pathname.startsWith(PATHS.POST.ROOT);
  const { toggleTheme, isDark } = useNavigation();

  return (
    <nav className='flex items-center justify-between'>
      <Link href={PATHS.HOME}>
        <h1
          className={clsx(
            'text-2xl font-bold transition-all duration-200',
            isPostDetailPage
              ? 'gradient-text'
              : 'text-slate-700 dark:text-secondary'
          )}
        >
          overreacted
        </h1>
      </Link>
      <Toggle
        checked={isDark}
        label={isDark ? 'Dark' : 'Light'}
        onChange={toggleTheme}
      />
    </nav>
  );
};
