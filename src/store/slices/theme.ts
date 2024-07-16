import { StateCreator } from 'zustand';

type TTheme = 'dark' | 'light';

export interface IThemeSlice {
  theme: TTheme;
  setTheme: (theme: TTheme) => void;
}

export const createThemeSlice: StateCreator<IThemeSlice> = (set, get) => ({
  theme: 'light',
  setTheme: (theme) => set({ theme: theme }),
});
