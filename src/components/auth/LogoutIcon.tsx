import { TbLogout } from "react-icons/tb";

import { IconWrap } from "wrapper";

interface Props {
  wideMenu: boolean;
  onClick: () => void;
}

const LogoutIcon: React.FC<Props> = ({ wideMenu, onClick }) => {
  return (
    <IconWrap wideMenu={wideMenu} onClick={onClick}>
      <TbLogout />
      {wideMenu && <p>Logout</p>}
    </IconWrap>
  );
};

export default LogoutIcon;
