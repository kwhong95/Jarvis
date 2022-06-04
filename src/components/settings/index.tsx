import { IoSettingsOutline } from "react-icons/io5";

import { IconWrap } from "wrapper";
interface Props {
  wideMenu: boolean;
}

const Settings: React.FC<Props> = ({ wideMenu }) => {
  return (
    <IconWrap wideMenu={wideMenu}>
      <IoSettingsOutline />
      {wideMenu && <p>Settings</p>}
    </IconWrap>
  );
};

export default Settings;
