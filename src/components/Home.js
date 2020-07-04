import React from "react";
import useSWR from "swr";
import { qglFetcher } from "../pages/api/graphql/prismaClient";
import { container, row } from "./home.module.css";
import JobContainer from "./JobContainer";
/*
  Reason my graphql query returns only 20 items  @https://stackoverflow.com/questions/55112026/aws-appsync-graphql-api-only-return-20-items-from-dynamodb
  Appsync -->schema->resolvers ->listBookStores
  For pagination take 1kb (min item size in Dynamo)[you can expect to get around 1024 records before your results will be paginated
     (meaning you will get a nextToken in the response from DynamoDB)]
  Note: DynamoDB will automatically paginate once your result set reaches 1 MB.))
*/
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
  const { data, error } = useSWR(GET_BOOKS, { initialData, suspense: true });
  // debugger;
  if (error) return <div>Error encountered:{JSON.stringify(error, null, 4)}</div>;
  if (!data) return <div>Loading....</div>;
  return (
    //NOTE: not sure if suspennse is correct here
    // <Suspense fallback={<div>loading...</div>}> removed because it was causing ssr errros , TODO:replace with normal loaders
    <div className={container}>
      <div className={row}>
        {data.listBookStores.items.map((item) => {
          return <JobContainer description={item} key={item.Id} />;
        })}
      </div>
    </div>
  );
}
//Get SSR Data on initial page load @build time:
Home.getInitialProps = async (ctx) => {
  //NOTE :Passed fetcher this way because i can't useSwr hook here
  const initialData = await qglFetcher(GET_BOOKS);
  return { initialData };
};
//By default SWR caches pre rendered data , but makes another call in background (to stay in sync when more tabs are open)
//TO disable this ADD:

//TODO: PRefetching --https://swr.vercel.app/docs/prefetching
//SSR render getinitialprops--//example--https://codeconqueror.com/blog/fetching-data-in-next-js

//ctx props ->https://nextjs.org/docs/api-reference/data-fetching/getInitialProps#context-object

//TODO: check out https://nextjs.org/learn/basics/data-fetching/pre-rendering ,https://nextjs.org/learn/basics/data-fetching/with-data
//bruno repo:https://github.com/bmvantunes/youtube-2020-feb-swr-hook

//https://nextjs.org/learn/basics/data-fetching/getstaticprops-details

//example repo (tsx)https://github.com/bmvantunes/youtube-2020-feb-swr-hook

//DOCS ;https://swr.now.sh/
