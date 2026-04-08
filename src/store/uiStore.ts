import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface UIState {
  mobileMenuOpen: boolean;
  language: 'en' | 'ur';
  isHelpOpen: boolean;
  hasOpenedHelp: boolean;
  toggleMobileMenu: () => void;
  closeMobileMenu: () => void;
  setLanguage: (lang: 'en' | 'ur') => void;
  setHelpOpen: (v: boolean) => void;
}

export const useUIStore = create<UIState>()(
  persist(
    (set) => ({
      mobileMenuOpen: false,
      language: 'en',
      isHelpOpen: false,
      hasOpenedHelp: false,
      toggleMobileMenu: () => set((s) => ({ mobileMenuOpen: !s.mobileMenuOpen })),
      closeMobileMenu: () => set({ mobileMenuOpen: false }),
      setLanguage: (language) => {
        document.documentElement.dir = language === 'ur' ? 'rtl' : 'ltr';
        document.documentElement.lang = language;
        document.body.classList.toggle('font-urdu', language === 'ur');
        set({ language });
      },
      setHelpOpen: (v) => set((s) => ({ isHelpOpen: v, hasOpenedHelp: s.hasOpenedHelp || v })),
    }),
    {
      name: 'sl-ui-store',
      partialize: (s) => ({ language: s.language }),
    }
  )
);
