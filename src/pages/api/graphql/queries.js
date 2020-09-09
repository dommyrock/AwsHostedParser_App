// gql quaries for the data fetching

export const GET_BOOKS = /* GraphQL */ `
  query listBookStores($limit: Int, $nextToken: String) {
    listBookStores(limit: $limit, nextToken: $nextToken) {
      items {
        Book_Id
        Id
        Isbn
        Title
        CreatedTimestamp
      }
      nextToken
    }
  }
`;
export const GET_SALARIES = /* GraphQL */ `
  query getSalaryData($Company: String!) {
    getSalaryData(Company: $Company) {
      Company
      Data
    }
  }
`;
