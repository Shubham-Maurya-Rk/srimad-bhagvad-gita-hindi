import { create } from "zustand";

export const useFontSize = create((set) => ({
  fontSize: 20, // default value

  setFontSize: (newFontSize) => {
    if (newFontSize < 18) newFontSize = 18;
    if (newFontSize > 30) newFontSize = 30;
    if (typeof window !== "undefined") {
      window.localStorage.setItem("fontSize", newFontSize);
    }
    set({ fontSize: newFontSize });
  },

  initFontSize: () => {
    if (typeof window !== "undefined") {
      const storedFontSize = localStorage.getItem("fontSize");
      if (storedFontSize) {
        const parsedFontSize = parseInt(storedFontSize);
        set({ fontSize: Math.min(30, Math.max(18, parsedFontSize)) });
      }
    }
  },
}));

