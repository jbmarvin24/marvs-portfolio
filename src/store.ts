import { create } from 'zustand';

type ThemeType = 'myDarkTheme' | 'myLightTheme';

interface Store {
  theme: ThemeType;
  toggleTheme: () => void;
}

const useStore = create<Store>((set) => ({
  theme: 'myDarkTheme',
  toggleTheme: () =>
    set((store) => ({
      theme: store.theme === 'myDarkTheme' ? 'myLightTheme' : 'myDarkTheme',
    })),
}));

export default useStore;
