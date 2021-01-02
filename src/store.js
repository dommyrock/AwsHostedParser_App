import create from "zustand";
import { devtools } from "zustand/middleware";

export const useStore = create(
  devtools((set) => ({
    companies_search: false,
    keyword_search: false,
    toggleCompaniesSearch: () => {
      // debugger;
      set((state) => ({ companies_search: !state.companies_search }));
    },
    toggleKeywordSearch: () => {
      // debugger;
      set((state) => ({ keyword_search: !state.keyword_search }));
    },

    //example
    // bears: 0,
    // increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
    // removeAllBears: () => set({ bears: 0 }),
  }))
);
