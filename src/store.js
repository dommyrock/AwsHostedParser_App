import create from "zustand";

const useStore = create((set) => ({
  Companies_search: false,
  keyword_search: false,
  toggleCompaniesSearch: () => set({ Companies_search: !Companies_search }),
  toggleKeywordSearch: () => set({ keyword_search: !keyword_search }),

  //example
  // bears: 0,
  // increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  // removeAllBears: () => set({ bears: 0 }),
}));
