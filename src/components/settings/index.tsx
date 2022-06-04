import { IoSettingsOutline } from "react-icons/io5";

import { IconWrap } from "wrapper";
interface Props {
  wideMenu: boolean;
  onClick: () => void;
}

const Settings: React.FC<Props> = ({ wideMenu, onClick }) => {
  return (
    <IconWrap wideMenu={wideMenu} onClick={onClick}>
      <IoSettingsOutline />
      {wideMenu && <p>Settings</p>}
    </IconWrap>
  );
};

export default Settings;
