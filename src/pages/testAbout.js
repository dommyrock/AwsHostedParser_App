import React from "react";
//Compomnent made by me for tsting fetch logic
import { useQuery, gql } from "@apollo/client";
// import gql from "graphql-tag"; remove this , since its alreadyi in client , and also aws npm  crap
const GET_BOOKS = gql`
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
  const { loading, error, data, networkStatus } = useQuery(GET_BOOKS);

  if (loading) return <h1>Loading data ....</h1>;
  // debugger;
  const result = data.listBookStores.items;
  console.log(result);

  return (
    <div>
      <pre>{JSON.stringify(result, null, 4)}</pre>
    </div>
  );
};

export default About;

//hooks api: https://www.apollographql.com/docs/react/v3.0-beta/api/react/hooks/

//Queries info: https://www.apollographql.com/docs/react/v3.0-beta/data/queries/
