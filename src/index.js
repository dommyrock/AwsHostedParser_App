//Test client init here
//(look up where to do it in next app (prob import this component to pages->index.js))

import React from "react";
import ReactDOM from "react-dom";

import Client from "aws-appsync";
import { ApolloProvider } from "@apollo/client";
import { AppSync } from "./AppSyncConfig.json";
// import {Rehydrated} from "aws-appsync-react"; "not sure what thsi does"

const client = new Client({
  url: AppSync.Default.ApiUrl,
  region: AppSync.Default.Region,
  auth: {
    type: "API_KEY",
    apiKey: AppSync.Default.ApiKey,
  },
});

const WithProvider = () => (
  <ApolloProvider>
    client={client}
    {/* <Rehydrated> */}
    {/* <App/> */}
    {/* </Rehydrated> */}
  </ApolloProvider>
);
//Not sure about this -- read more about next and how to export app into root

// ReactDOM.render(<WithProvider />, document.getElementById("root"));
