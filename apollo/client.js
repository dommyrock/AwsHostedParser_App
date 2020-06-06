//TODO:
// AWS tutorial: https://docs.aws.amazon.com/appsync/latest/devguide/building-a-client-app-node.html#aws-appsync-building-a-client-app-node

//Apollo client https://www.apollographql.com/docs/react/v3.0-beta/get-started/

//github help/(next, static props):https://github.com/vercel/next.js/discussions/11957#discussioncomment-7190
//article --https://dev.to/givehug/next-js-apollo-client-and-server-on-a-single-express-app-55l6

//-------------------------------------------------------------------------------------------------------------------------------------------------
//TODO: CONNECT client app with Appsync API (done)
//https://www.youtube.com/watch?v=H36p3evcRC0

//EXAMPLE proj:
//https://github.com/lfades/next-with-apollo

//TODO -- connect to @apolo/client, than try fetching data from Dynamo DB w graphql

//Read -->https://nextjs.org/docs/basic-features/data-fetching

import Client from "aws-appsync";
import { AppSync } from "../src/AppSyncConfig.json";
import { ApolloProvider } from "@apollo/client"; //Note export this to app entry point (reseach where that is in next app)

//Setup apsync client
const client = new Client({
  url: AppSync.Default.ApiUrl,
  region: AppSync.Default.Region,
  auth: {
    type: "API_KEY",
    apiKey: AppSync.Default.ApiKey,
  },
});

//init provider and wrap main app with it
export const provider = () => <ApolloProvider client={client}></ApolloProvider>;

//than (might not be that usefull)(1hr demo-and appsync info)
//https://www.youtube.com/watch?time_continue=2012&v=QqL4Yx2nP98&feature=emb_title

//NOTE : Next app is seo friendly so it doesnt inject app into root markup element like react does !!!

/* check for latest npm versions :
Use npx npm-check-updates -u and npm install to upgrade all dependencies to their latest major versions
*/
