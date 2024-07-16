import { useThemeStore } from '@/store/store';
import { useEffect } from 'react';

export const useNavigation = () => {
  const { theme, setTheme } = useThemeStore();
  const isDark = theme === 'dark';

  // Set initial theme
  useEffect(() => {
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      setTheme('dark');
      document.body.classList.add('dark');
      document.body.classList.add('bg-primary');
    } else {
      document.body.classList.remove('dark');
      document.body.classList.remove('bg-primary');
      setTheme('light');
    }
  }, []);

  const toggleTheme = () => {
    isDark ? setTheme('light') : setTheme('dark');

    if (isDark) {
      document.body.classList.remove('dark');
      document.body.classList.remove('bg-primary');
      localStorage.theme = 'light';
    } else {
      document.body.classList.add('dark');
      document.body.classList.add('bg-primary');
      localStorage.theme = 'dark';
    }
  };

  return { toggleTheme, isDark };
};
