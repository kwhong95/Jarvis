import { gql } from "graphql-request";

export const getUserInfo = gql`
  query GetUserInfo($email: String!) {
    member(where: { email: $email }) {
      name
      photo {
        url
      }
    }
  }
`;
