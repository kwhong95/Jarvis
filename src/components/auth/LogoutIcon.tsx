import { TbLogout } from "react-icons/tb";

import { IconWrap } from "wrapper";

interface Props {
  wideMenu: boolean;
}

const LogoutIcon: React.FC<Props> = ({ wideMenu }) => {
  return (
    <IconWrap wideMenu={wideMenu}>
      <TbLogout />
      {wideMenu && <p>Logout</p>}
    </IconWrap>
  );
};

export default LogoutIcon;
