//Compomnent made by me for tsting fetch logic
import React, { Suspense } from "react";
import useSWR from "swr";

//DOCS ;https://swr.now.sh/

//Done -added initial props to home compoenent
// import gql from "graphql-tag"; remove this , since its alreadyi in client , and also aws npm  crap
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

const About = () => {
  // Bugs : i dont get data on initial /about visit , only on hard refresh
  //TODO: for some reason it "revalidates" fetches 3 time when i re visit section????
  const { data, error } = useSWR(GET_BOOKS);
  // debugger;
  console.log(data);
  const result = data;
  if (error) return <div>Error encountered:{JSON.stringify(error, null, 4)}</div>;
  if (!data) return <div>Loading....</div>;
  return (
    <div>
      <Suspense fallback={<div>loading...</div>}>
        <pre>{result} </pre>
      </Suspense>
    </div>
  );
};

export default About;
// // //Get SSR Data on initial page load:
// About.getInitialProps = async (ctx) => {
//   const response = useSWR(GET_BOOKS);
//   const json = await response.json();
//   return { initialAboutData: json };

//hooks api: https://www.apollographql.com/docs/react/v3.0-beta/api/react/hooks/

//Queries info: https://www.apollographql.com/docs/react/v3.0-beta/data/queries/
