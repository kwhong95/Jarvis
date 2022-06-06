import { gql } from "graphql-request";

export const getTasks = gql`
  query getTasks {
    tasks {
      title
      slug
      members {
        name
        photo {
          url
        }
      }
    }
  }
`;
