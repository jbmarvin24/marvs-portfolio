import { create } from 'zustand';

type ThemeType = 'dark' | 'light';

interface ThemeStore {
  theme: ThemeType;
  fontColor: string;
  toggleTheme: () => void;
}

const useThemeStore = create<ThemeStore>((set) => ({
  theme: 'dark',
  fontColor: 'text-gray-100',
  toggleTheme: () =>
    set((store) => ({
      theme: store.theme === 'dark' ? 'light' : 'dark',
      fontColor: store.theme === 'dark' ? 'text-gray-900' : 'text-gray-100',
    })),
}));

export default useThemeStore;
