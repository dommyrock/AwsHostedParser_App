//TODO:
// AWS tutorial: https://docs.aws.amazon.com/appsync/latest/devguide/building-a-client-app-node.html#aws-appsync-building-a-client-app-node

//Apollo client https://www.apollographql.com/docs/react/v3.0-beta/get-started/

//github help/(next, static props):https://github.com/vercel/next.js/discussions/11957#discussioncomment-7190
//article --https://dev.to/givehug/next-js-apollo-client-and-server-on-a-single-express-app-55l6

//TODO: find tutorial -how to call aws gql api from Apolo client
//https://www.youtube.com/watch?v=H36p3evcRC0
//than (might not be that usefull)
//https://www.youtube.com/watch?time_continue=2012&v=QqL4Yx2nP98&feature=emb_title

//EXAMPLE :
//https://github.com/lfades/next-with-apollo

import cfg from "../src/AppSyncConfig.json";

const { AppSync } = cfg;
//access api key this way
//AppSync.Default.ApiKey
//graphql Api url
//AppSync.Default.ApiUrl

//NEXT -- connect to @apolo/client
