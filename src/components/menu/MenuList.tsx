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
];

interface Props {
  wideMenu: boolean;
}

const MenuList: React.FC<Props> = ({ wideMenu }) => {
  return (
    <Container>
      {list.map((item) => (
        <MenuItem
          key={item.id}
          title={item.title}
          href={item.href}
          wideMenu={wideMenu}
        />
      ))}
    </Container>
  );
};

export default MenuList;
