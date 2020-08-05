import { GraphQLClient } from "graphql-request";
//NOTE: Prisma is minimal api, has no default caching like apollo, relay
//DOCS :https://github.com/prisma-labs/graphql-request

//TODO: find out how can i cache my site for weeek on vercel's CDN's and after time period "revalidate" data

const gqlClient = new GraphQLClient(
  process.env.NODE_ENV === "development" ? process.env.NEXT_PUBLIC_API_URL : process.env.API_URL,
  {
    headers: {
      "x-api-key": process.env.NODE_ENV === "development" ? process.env.NEXT_PUBLIC_API_KEY : process.env.API_KEY,
    },
  }
);
export default gqlClient;

/**
 *
 * @param  {...any} query
 * @param {*} variables
 */
export async function gqlFetcher(...query) {
  // var env = process.env.NODE_ENV || "development";
  const data = await gqlClient.request(...query);
  return data;
}

//pure fetch example
// export async function gqlFetcher(query, variables) {
//   const { data, errors } = await fetch(process.env.NEXT_PUBLIC_API_URL, {
//     method: "post",
//     headers: { "content-type": "application/json", "x-api-key": process.env.NEXT_PUBLIC_API_KEY },
//     body: JSON.stringify({ query, variables }),
//   }).then((r) => r.json());
//   if (errors) throw errors;
//   debugger;
//   return data;
// }

//local storage cache example
// export const cachedFetcher = (url, ...query) => {
//   debugger;
//   // Try to find the previously fetched response
//   const cached = localStorage.getItem(url);
//   if (cached) {
//     // We found it
//     return JSON.parse(cached);
//   }

//   // Getting it the boring way.
//   return gqlClient.request(...query).then((response) => {
//     // Cache it on the way out!
//     localStorage.setItem(url, JSON.stringify(response));

//     return response;
//   });
// };
