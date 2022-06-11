import { useLocation } from "react-router-dom";
import styled from "@emotion/styled";

import MenuItem from "./MenuItem";

const Container = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 1.5rem 0;
`;

const list = [
  {
    id: 0,
    href: "/",
    title: "Dashboard",
  },
  {
    id: 1,
    href: "/calendar",
    title: "Calendar",
  },
];

interface Props {
  wideMenu: boolean;
}

const MenuList: React.FC<Props> = ({ wideMenu }) => {
  const { pathname } = useLocation();

  return (
    <Container>
      {list.map((item) => {
        const active = `${pathname}` === item.href && true;

        return (
          <MenuItem
            title={item.title}
            key={item.id}
            href={item.href}
            active={active}
            wideMenu={wideMenu}
          />
        );
      })}
    </Container>
  );
};

export default MenuList;
