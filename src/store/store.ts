import { create } from 'zustand';
import { createThemeSlice, IThemeSlice } from './slices';

type ThemeStoreState = IThemeSlice;

export const useThemeStore = create<ThemeStoreState>()((...a) => ({
  ...createThemeSlice(...a),
}));
