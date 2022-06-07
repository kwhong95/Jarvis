import styled from "@emotion/styled";
import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useQuery } from "react-query";
import { request } from "graphql-request";

import { GRAPHCMS_API } from "configs/api";
import { getUserInfo } from "services";
import { auth } from "configs";

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Card = styled.div`
  width: 400px;
  height: 500px;
  background-color: ${({ theme }) => theme.colors.navy_2};
  box-shadow: ${({ theme }) => theme.boxShadow.navy};
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  align-items: center;

  h3 {
    margin-top: 2rem;
  }
`;

const AuthWrap = (Component: React.FC, title: string) =>
  function Hoc() {
    const user: any = auth.currentUser;
    const { data } = useQuery(["GetUserInfo", user.email], async () => {
      const result = await request(GRAPHCMS_API!, getUserInfo, {
        email: user.email,
      });

      return result.member;
    });

    useEffect(() => {
      user.updateProfile({
        displayName: data.name,
      });
    });

    return (
      <Container>
        <Helmet>
          <title>{title}</title>
        </Helmet>
        <Card>
          <h3>{title}</h3>
          <Component />
        </Card>
      </Container>
    );
  };

export default AuthWrap;
