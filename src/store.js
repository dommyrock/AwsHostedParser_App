import create from "zustand";
import { devtools } from "zustand/middleware";
// TODO
// Problem ringt now is im removing kw,company PermissionRequest, i need to add removed to search container
// ---> make 'unToggled_keywords' and únToggled_companies' props in state ,and when i remove items from seleceted ones populate this list and read from it in menue , instead of from base array
export const useStore = create(
  devtools((set, get) => ({
    //#region data
    keywords: [
      { id: 32, label: "SWE", type: "keyword" },
      { id: 44, label: "Software developer", type: "keyword" },
      { id: 55, label: "Backend developer", type: "keyword" },
      { id: 136, label: "More", showSVG: true, type: "keyword" },
      { id: 66, label: "Frontend developer", type: "keyword" },
      { id: 77, label: "Dev-ops", type: "keyword" },
      { id: 88, label: "Project manager", type: "keyword" },
      { id: 99, label: "Data scientist", type: "keyword" },
      { id: 122, label: "Engineering lead", type: "keyword" },
      { id: 123, label: "Tech lead", type: "keyword" },
    ],
    addKeyword: (kw) => {
      set((state) => ({ keywords: [...state.keywords, kw] }));
    },
    removeKeyword: (kw) => {
      const index = get().keywords.findIndex((item) => item.label === kw);
      //found keyword
      if (index > -1) set((state) => ({ keywords: state.keywords.filter((i) => i.label !== kw) }));
    },
    dropdown_keywords: [],
    addDropdownKeyword: (kw) => {
      const foundKeyword = get().keywords.find((x) => x.label === kw);
      if (foundKeyword)
        set((state) => ({ dropdown_keywords: [...state.dropdown_keywords, foundKeyword] }));
    },
    removeDropdownKeyword: (kw) => {
      const index = get().dropdown_keywords.findIndex((item) => item.label === kw);
      if (index > -1)
        set((state) => ({
          dropdown_keywords: state.dropdown_keywords.filter((i) => i.label !== kw),
        }));
    },
    companies: [
      { id: 1, label: "Facebook", src: "https://i.imgur.com/DkJIkWQ.png", type: "company" },
      { id: 2, label: "Google", src: "https://i.imgur.com/8KhVFYA.png", type: "company" },
      { id: 3, label: "Microsoft", src: "https://i.imgur.com/tc6VO28.png", type: "company" },
      { id: 4, label: "AWS", src: "https://i.imgur.com/SEZpYZP.png", type: "company" },
      { id: 16, label: "More", src: "", showSVG: true, type: "company" },
      { id: 27, label: "Test 1", type: "company" },
      { id: 228, label: "Test 12", type: "company" },
      { id: 29, label: "Test 123", type: "company" },
      { id: 310, label: "Test 24", type: "company" },
      { id: 47, label: "Test 45", type: "company" },
      { id: 48, label: "Test 566", type: "company" },
      { id: 94, label: "Test 121212", type: "company" },
      { id: 140, label: "Test 14545445455", type: "company" },
    ],
    addCompany: (company) => {
      set((state) => ({ companies: [...state.companies, company] }));
    },
    removeCompany: (company) => {
      const index = get().companies.findIndex((item) => item.label === company);
      if (index > -1)
        set((state) => ({ companies: state.companies.filter((x) => x.label !== company) }));
    },
    dropdown_companies: [],
    addDropdownCompany: (company) => {
      const foundCompany = get().companies.find((x) => x.label === company);
      if (foundCompany)
        set((state) => ({ dropdown_companies: [...state.dropdown_companies, foundCompany] }));
    },
    removeDropdownCompany: (company) => {
      const index = get().dropdown_companies.findIndex((item) => item.label === company);
      if (index > -1)
        set((state) => ({
          dropdown_companies: state.dropdown_companies.filter((x) => x.label !== company),
        }));
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
