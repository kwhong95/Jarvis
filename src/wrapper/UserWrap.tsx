import { useState } from "react";
import styled from "@emotion/styled";
import { Helmet } from "react-helmet";

import { Menu } from "components";
import Header from "components/header";

const Container = styled.div<{ wideMenu: boolean }>`
  width: 100%;
  min-height: 100vh;
  max-height: 100vh;
  overflow: hidden;

  display: grid;
  grid-template-columns: ${({ wideMenu }) =>
    wideMenu ? "1fr 5fr" : "1fr 15fr"};
`;

const Inner = styled.div`
  padding: 1rem;
`;

const UserWrap = (Component: React.FC, title: string) =>
  function Hoc() {
    const [wideMenu, setWideMenu] = useState<boolean>(false);

    return (
      <Container wideMenu={wideMenu}>
        <Helmet>
          <title>{title}</title>
        </Helmet>
        <Menu wideMenu={wideMenu} setWideMenu={setWideMenu} />
        <Inner>
          <Header />
          <Component />
        </Inner>
      </Container>
    );
  };

export default UserWrap;
