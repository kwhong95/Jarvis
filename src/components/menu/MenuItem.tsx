import styled from "@emotion/styled";
import { Link } from "react-router-dom";

import MenuIcon from "./MenuIcon";

const Container = styled.li<{ wideMenu: boolean }>`
  display: flex;
  align-items: center;
  background-color: #0083ff;
  width: ${({ wideMenu }) => (wideMenu ? "80%" : "35%")};
  margin: 0.5rem;
  padding: 1rem;
  border-radius: 12px;
  transition: 0.3s;

  .icon {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.825rem;
    color: white;
  }

  .link {
    display: flex;
    color: white;
    font-weight: 500;
    gap: 1rem;
    align-items: center;
    text-decoration: none;
  }
`;

interface Props {
  title: string;
  href: string;
  wideMenu: boolean;
}

const MenuItem: React.FC<Props> = ({ title, href, wideMenu }) => {
  return (
    <Container wideMenu={wideMenu}>
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
