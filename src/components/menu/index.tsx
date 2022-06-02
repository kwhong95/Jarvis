import { Dispatch, SetStateAction } from "react";
import styled from "@emotion/styled";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

import { Settings } from "components";
import MenuList from "./MenuList";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding: 1.5rem 1rem;
  z-index: 10;

  .navigation {
    display: flex;
    flex-direction: column;

    .logo {
      font-weight: 800;
    }

    .menu-collapse {
      display: flex;
      margin-top: 2rem;
      justify-content: space-between;
      align-items: center;
      cursor: pointer;
      color: #7f8490;
      font-weight: 600;
    }
  }
`;

interface Props {
  wideMenu: boolean;
  setWideMenu: Dispatch<SetStateAction<boolean>>;
}

const Menu: React.FC<Props> = ({ wideMenu, setWideMenu }) => {
  const toggleClick = () => setWideMenu((prev) => !prev);
  console.log(wideMenu);

  return (
    <Container>
      <nav className="navigation">
        <div className="logo">Jarvis</div>
        <div className="menu-collapse" onClick={toggleClick}>
          <p>Menu</p>
          {wideMenu ? <IoIosArrowBack /> : <IoIosArrowForward />}
        </div>
        <MenuList wideMenu={wideMenu} />
      </nav>
      <div className="settings">
        <Settings wideMenu={wideMenu} />
      </div>
    </Container>
  );
};

export default Menu;
