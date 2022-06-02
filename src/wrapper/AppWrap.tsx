import styled from "@emotion/styled";
import { Helmet } from "react-helmet";

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
`;

const AppWrap = (Component: React.FC, title: string) =>
  function Hoc() {
    return (
      <Container>
        <Helmet>
          <title>{title}</title>
        </Helmet>
        <Component />
      </Container>
    );
  };

export default AppWrap;
