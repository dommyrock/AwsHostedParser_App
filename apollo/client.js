//github help/(next, static props):https://github.com/vercel/next.js/discussions/11957#discussioncomment-7190
//article --https://dev.to/givehug/next-js-apollo-client-and-server-on-a-single-express-app-55l6

//-------------------------------------------------------------------------------------------------------------------------------------------------

import { AppSync } from "../src/AppSyncConfig.json";
import { ApolloClient, InMemoryCache } from "@apollo/client";
export const client = new ApolloClient({
  uri: AppSync.Default.ApiUrl,
  cache: new InMemoryCache(),
  headers: {
    "x-api-key": AppSync.Default.ApiKey,
  },
});

//Apollo client  setup(https://www.youtube.com/watch?v=ou0fEW1eRjc&t=4159s)
//Read -->https://nextjs.org/docs/basic-features/data-fetching
//EXAMPLE proj:
//https://github.com/lfades/next-with-apollo
//Apollo client https://www.apollographql.com/docs/react/v3.0-beta/get-started/
//TODO:
//NOTE : only look GQL queries because rest is outdated
// AWS tutorial: https://docs.aws.amazon.com/appsync/latest/devguide/building-a-client-app-node.html#aws-appsync-building-a-client-app-node
//TODO
//Auth --https://www.apollographql.com/docs/react/v3.0-beta/networking/authentication/
