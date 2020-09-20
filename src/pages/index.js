import React from "react";
import useSWR from "swr";
import { gqlFetcher } from "./api/graphql/prismaClient";
import { GET_BOOKS } from "../pages/api/graphql/queries";
import JobExtrasCard from "../components/card/JobExtrasCard";
import JobCard from "../components/card/JobCard";
import JobHighlightCard from "../components/card/JobHighlightCard";
import SlidingSnackbar from "../components/shared/SlidingSnackbar";
import SocialsContainer from "../components/shared/SocialsContainer";
import DotsLoader from "../components/shared/DotsLoader";
/*Note
  For pagination take 1kb (min item size in Dynamo)[you can expect to get around 1024 records before your results will be paginated
     (meaning you will get a nextToken in the response from DynamoDB)]
  Note: DynamoDB will automatically paginate once your result set reaches 1 MB.))
*/
const variables = { limit: 20, nextToken: "" };

/*
 TODO:
 1) !!!!!!!!!!!!!!!!!!!!!!!!!!!!!
 https://swr.vercel.app/docs/pagination
 
2) page will not render untill data is available , so we can show progress bar 
--https://github.com/rstacruz/nprogress
--npmjs.com/package/nprogress  (documentation)
for css i need to import 'nprogress/nprogress.css' in main App compont so it's availiable in every page
*/

export default function Home({ jobsData }) {
  const { data, error } = useSWR([GET_BOOKS, variables], { initialData: jobsData });
  // debugger;
  if (error) return <div>Error encountered:{JSON.stringify(error, null, 4)}</div>;
  if (!data) return <div>Loading....</div>;
  return (
    //NOTE: not sure if suspennse is correct here
    // <Suspense fallback={<div>loading...</div>}> removed because it was causing ssr errros , TODO:replace with normal loaders
    <div>
      <div className="container">
        {/* <DotsLoader /> loading "spinner" used here for testing  */}
        <div id="container-top">
          <JobHighlightCard />
          <JobExtrasCard />
        </div>
        <div className="container-items">
          {data.listBookStores.items.map((item, index) => {
            return <JobCard data={item} key={item.Id} />;
          })}
        </div>
      </div>
      <SlidingSnackbar />
    </div>
  );
}

//Get SSR Data on initial page load @build time:
export async function getStaticProps(context) {
  //NOTE :Passed fetcher this way because i can't useSwr hook here
  const jobsData = await gqlFetcher(GET_BOOKS, variables);
  return { props: { jobsData } };
}
