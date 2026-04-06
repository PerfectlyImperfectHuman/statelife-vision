import { create } from 'zustand';

interface UIState {
  mobileMenuOpen: boolean;
  language: 'en' | 'ur';
  toggleMobileMenu: () => void;
  closeMobileMenu: () => void;
  setLanguage: (lang: 'en' | 'ur') => void;
}

export const useUIStore = create<UIState>((set) => ({
  mobileMenuOpen: false,
  language: 'en',
  toggleMobileMenu: () => set((s) => ({ mobileMenuOpen: !s.mobileMenuOpen })),
  closeMobileMenu: () => set({ mobileMenuOpen: false }),
  setLanguage: (language) => set({ language }),
}));
