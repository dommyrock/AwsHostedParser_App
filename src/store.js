import create from "zustand";
import { devtools } from "zustand/middleware";

export const useStore = create(
  devtools((set, get) => ({
    //#region keywords
    keywords: [],
    addKeyword: (kw) => {
      // debugger;
      set((state) => ({ keywords: [...state.keywords, kw] }));
    },
    removeKeyword: (kw) => {
      const index = get().keywords.indexOf(kw);
      //found keyword
      debugger;
      if (index > -1) set((state) => ({ keywords: state.keywords.filter((i) => i !== kw) }));
    },
    //#endregion
    //#region Toggles
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
    //#endregion
  }))
);
