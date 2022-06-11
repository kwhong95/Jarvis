import { gql } from "graphql-request";

export const getIssueList = gql`
  query GetIssueList($name: String!) {
    member(where: { createdBy: { name: $name } }) {
      issueFeeds {
        title
        detail
        reportedTo {
          name
        }
      }
    }
  }
`;
