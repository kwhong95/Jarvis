import { useState } from "react";
import styled from "@emotion/styled";
import { Helmet } from "react-helmet";

import { Menu } from "components";

const Container = styled.div<{ wideMenu: boolean }>`
  width: 100%;
  min-height: 100vh;

  display: grid;
  grid-template-columns: ${({ wideMenu }) =>
    wideMenu ? "1fr 5fr" : "1fr 15fr"};
`;

const AppWrap = (Component: React.FC, title: string) =>
  function Hoc() {
    const [wideMenu, setWideMenu] = useState<boolean>(false);

    return (
      <Container wideMenu={wideMenu}>
        <Helmet>
          <title>{title}</title>
        </Helmet>
        <Menu wideMenu={wideMenu} setWideMenu={setWideMenu} />
        <Component />
      </Container>
    );
  };

export default AppWrap;
