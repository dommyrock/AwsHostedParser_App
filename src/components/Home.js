import React, { Suspense } from "react";
import useSWR from "swr";
import { qglFetcher } from "../pages/_app";

//Use this as exmple , here i pre render data at buildd time
const GET_BOOKS = /* GraphQL */ `
  query listBookStores {
    listBookStores {
      items {
        Book_Id
        Id
        Isbn
        Title
        CreatedTimestamp
      }
    }
  }
`;
/*
 TODO:
2) page will not render untill data is available , so we can show progress bar 
--https://github.com/rstacruz/nprogress
--npmjs.com/package/nprogress  (documentation)
for css i need to import 'nprogress/nprogress.css' in main App compont so it's availiable in every page
*/

export default function Home({ initialData }) {
  const { data } = useSWR(GET_BOOKS, { initialData, suspense: true });
  debugger;
  const titles = data.listBookStores.items.map((i) => <li>{i.Title}</li>);
  return (
    //NOTE: not sure if suspennse is correct here
    <Suspense fallback={<div>loading...</div>}>
      <div>
        <ul>{titles}</ul>
      </div>
    </Suspense>
  );
}
//Get SSR Data on initial page load @build time:
Home.getInitialProps = async (ctx) => {
  //NOTE :Passed fetcher this way because i cant useSwr hook here
  const initialData = await qglFetcher(GET_BOOKS);
  return { initialData };
};

//SSR render getinitialprops--//example--https://codeconqueror.com/blog/fetching-data-in-next-js

//ctx props ->https://nextjs.org/docs/api-reference/data-fetching/getInitialProps#context-object

//TODO: check out https://nextjs.org/learn/basics/data-fetching/pre-rendering ,https://nextjs.org/learn/basics/data-fetching/with-data
//bruno repo:https://github.com/bmvantunes/youtube-2020-feb-swr-hook

//https://nextjs.org/learn/basics/data-fetching/getstaticprops-details

//example repo (tsx)https://github.com/bmvantunes/youtube-2020-feb-swr-hook
