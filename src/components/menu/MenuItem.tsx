import styled from "@emotion/styled";
import { Link } from "react-router-dom";

import MenuIcon from "./MenuIcon";

const Container = styled.li<{ wideMenu: boolean; active: boolean }>`
  display: flex;
  align-items: center;
  background-color: ${({ active, theme }) => active && theme.colors.blue};
  width: ${({ wideMenu }) => (wideMenu ? "80%" : "35%")};
  margin: 0.5rem;
  padding: 1rem;
  border-radius: 12px;
  transition: 0.3s;

  .icon {
    display: flex;
    color: ${({ active, theme }) => (active ? "white" : theme.colors.gray)};
    justify-content: center;
    align-items: center;
    font-size: 1.825rem;
  }

  .link {
    display: flex;
    font-weight: 500;
    color: ${({ active, theme }) => (active ? "white" : theme.colors.gray)};
    gap: 1rem;
    align-items: center;
    text-decoration: none;
  }
`;

interface Props {
  title: string;
  href: string;
  wideMenu: boolean;
  active: boolean;
}

const MenuItem: React.FC<Props> = ({ title, href, wideMenu, active }) => {
  return (
    <Container wideMenu={wideMenu} active={active}>
      <Link className="link" to={href}>
        <div className="icon">
          <MenuIcon menuItem={title} />
        </div>
        <p>{wideMenu && title}</p>
      </Link>
    </Container>
  );
};

export default MenuItem;
