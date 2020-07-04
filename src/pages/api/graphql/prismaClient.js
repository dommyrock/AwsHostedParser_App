import { GraphQLClient } from "graphql-request";
//NOTE: Prisma is minimal api, has no default caching like apollo, relay
//DOCS :https://github.com/prisma-labs/graphql-request

//TODO: find out how can i cache my site for weeek on vercel's CDN's and after time period "revalidate" data

const gqlClient = new GraphQLClient(process.env.API_URL, {
  headers: {
    "x-api-key": process.env.API_KEY,
  },
});
export default gqlClient;

/**Default gql fetcher function (imported into main app + getInitialProps)
 * @param  {...any} query Gql Query/mutation
 */
export const qglFetcher = (...query) => gqlClient.request(...query).then((res) => res);

//didint work (try again or figure how to doo with swr instead)
export const cachedFetcher = (url, ...query) => {
  debugger;
  // Try to find the previously fetched response
  const cached = localStorage.getItem(url);
  if (cached) {
    // We found it
    return JSON.parse(cached);
  }

  // Getting it the boring way.
  return gqlClient.request(...query).then((response) => {
    // Cache it on the way out!
    localStorage.setItem(url, JSON.stringify(response));

    return response;
  });
};
