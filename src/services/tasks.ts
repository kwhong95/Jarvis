import { gql } from "graphql-request";

export const getTasks = gql`
  query getTasks {
    tasks {
      title
      members {
        name
        photo {
          url
        }
      }
    }
  }
`;
