import { GraphQLClient } from "graphql-request";

const gqlClient = new GraphQLClient(process.env.API_URL, {
  headers: {
    "x-api-key": process.env.API_KEY,
  },
});
export default gqlClient;
