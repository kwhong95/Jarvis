import styled from "@emotion/styled";
import { Helmet } from "react-helmet";

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
  height: 450px;
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
