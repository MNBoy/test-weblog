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
      setThemeToDark();
    } else {
      setThemeToLight();
    }
  }, []);

  const setThemeToLight = () => {
    document.body.classList.remove('dark');
    document.body.classList.remove('bg-primary');
    localStorage.theme = 'light';
    setTheme('light');
  };

  const setThemeToDark = () => {
    document.body.classList.add('dark');
    document.body.classList.add('bg-primary');
    localStorage.theme = 'dark';
    setTheme('dark');
  };

  const toggleTheme = () => {
    isDark ? setTheme('light') : setTheme('dark');

    if (isDark) {
      setThemeToLight();
    } else {
      setThemeToDark();
    }
  };

  return { toggleTheme, isDark };
};
