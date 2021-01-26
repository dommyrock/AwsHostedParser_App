import create from "zustand";
import { devtools } from "zustand/middleware";
export const useStore = create(
  devtools((set, get) => ({
    //#region data
    keywords: [],
    roles: [
      { id: 32, label: "SWE", type: "role" },
      { id: 44, label: "Software developer", type: "role" },
      { id: 55, label: "Backend developer", type: "role" },
      { id: 66, label: "Frontend developer", type: "role" },
      { id: 77, label: "Dev-ops", type: "role" },
      { id: 88, label: "Project manager", type: "role" },
      { id: 99, label: "Data scientist", type: "role" },
      { id: 122, label: "Engineering lead", type: "role" },
      { id: 123, label: "Tech lead", type: "role" },
    ],
    addRole: (kw) => {
      set((state) => ({ roles: [...state.roles, kw] }));
    },
    removeRole: (kw) => {
      const index = get().roles.findIndex((item) => item.label === kw);
      //found keyword
      if (index > -1) set((state) => ({ roles: state.roles.filter((i) => i.label !== kw) }));
    },
    dropdown_roles: [],
    addDropdownRole: (kw) => {
      const foundKeyword = get().roles.find((x) => x.label === kw);
      if (foundKeyword)
        set((state) => ({ dropdown_roles: [...state.dropdown_roles, foundKeyword] }));
    },
    removeDropdownRole: (kw) => {
      const index = get().dropdown_roles.findIndex((item) => item.label === kw);
      if (index > -1)
        set((state) => ({
          dropdown_roles: state.dropdown_roles.filter((i) => i.label !== kw),
        }));
    },
    companies: [
      { id: 1, label: "Facebook", src: "https://i.imgur.com/DkJIkWQ.png", type: "company" },
      { id: 2, label: "Google", src: "https://i.imgur.com/8KhVFYA.png", type: "company" },
      { id: 3, label: "Microsoft", src: "https://i.imgur.com/tc6VO28.png", type: "company" },
      { id: 4, label: "AWS", src: "https://i.imgur.com/SEZpYZP.png", type: "company" },
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
    // companies_search_visible: false,
    // keyword_search_visible: false,
    // toggleCompaniesSearch: () => {
    //   // debugger;
    //   set((state) => ({ companies_search_visible: !state.companies_search_visible }));
    // },
    //currently not used (idea was that we have global indicator of which searchbox is being used kw,or companies)
    // toggleKeywordSearch: () => {
    //   // debugger;
    //   set((state) => ({ keyword_search_visible: !state.keyword_search_visible }));
    // },
    //#endregion
  }))
);
