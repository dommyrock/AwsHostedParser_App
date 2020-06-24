import React from "react";
import useSWR from "swr";
import gqlClient from "../pages/api/graphql/prismaClient";

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

export default function Home({ initialHomeData }) {
  const { data } = useSWR(GET_BOOKS, { initialData: initialHomeData });
  return (
    // <Suspense fallback={<div>loading...</div>}> NOTE: Suspense was causing errors on initial render after npm run dev so i removed it from swrConfig and here
    // </Suspense>
    <pre>{data} </pre>
  );
}
//Get SSR Data on initial page load:
Home.getInitialProps = async (ctx) => {
  const { data } = gqlClient.request(GET_BOOKS).then((res) => JSON.stringify(res, null, 4));
  const json = data;
  return { initialHomeData: json };
};
//Note ..cant use uswSWR hook here inside getInitialProps

//TODO: check out https://nextjs.org/learn/basics/data-fetching/pre-rendering ,https://nextjs.org/learn/basics/data-fetching/with-data
//bruno repo:https://github.com/bmvantunes/youtube-2020-feb-swr-hook

//https://nextjs.org/learn/basics/data-fetching/getstaticprops-details
