import { GraphQLClient } from "graphql-request";

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
