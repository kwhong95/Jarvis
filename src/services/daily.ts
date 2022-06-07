import { gql } from "graphql-request";

export const getDailyWork = gql`
  query GetDailyWork($name: String!) {
    member(where: { name: $name }) {
      dailyWorks {
        createdAt
        toDoList {
          text
        }
      }
    }
  }
`;
