import { create } from 'zustand';

type ThemeType = 'dark' | 'light';

interface ThemeStore {
  theme: ThemeType;
  toggleTheme: () => void;
}

const useThemeStore = create<ThemeStore>((set) => ({
  theme: 'dark',
  fontColor: 'text-gray-100',
  toggleTheme: () =>
    set((store) => ({
      theme: store.theme === 'dark' ? 'light' : 'dark',
    })),
}));

export default useThemeStore;
