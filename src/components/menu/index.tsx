import { Dispatch, SetStateAction, useState } from "react";
import styled from "@emotion/styled";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

import { Settings, LogoutIcon, SettingsModal } from "components";
import MenuList from "./MenuList";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;

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

  .user-icons {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    margin-bottom: 3rem;
  }
`;

interface Props {
  wideMenu: boolean;
  setWideMenu: Dispatch<SetStateAction<boolean>>;
}

const Menu: React.FC<Props> = ({ wideMenu, setWideMenu }) => {
  const [openSettings, setOpenSetting] = useState<boolean>(false);
  const toggleClick = () => setWideMenu((prev) => !prev);

  const handleOpen = () => setOpenSetting(true);
  const handleClose = () => setOpenSetting(false);

  return (
    <>
      <Container>
        <nav className="navigation">
          <div className="logo">Jarvis</div>
          <div className="menu-collapse" onClick={toggleClick}>
            <p>Menu</p>
            {wideMenu ? <IoIosArrowBack /> : <IoIosArrowForward />}
          </div>
          <MenuList wideMenu={wideMenu} />
        </nav>
        <div className="user-icons">
          <Settings wideMenu={wideMenu} onClick={handleOpen} />
          <LogoutIcon wideMenu={wideMenu} />
        </div>
      </Container>
      <SettingsModal isOpen={openSettings} onClose={handleClose} />
    </>
  );
};

export default Menu;
