import { gql } from "graphql-request";

export const getTeams = gql`
  query GetTeams {
    teams {
      name
      tag
      photo {
        url
      }
      members {
        name
        photo {
          url
        }
      }
    }
  }
`;
