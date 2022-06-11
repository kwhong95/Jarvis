import { MdDashboard, MdCalendarToday } from "react-icons/md";

interface Props {
  menuItem: "Dashboard" | string;
}

const MenuIcon: React.FC<Props> = ({ menuItem, ...props }) => {
  switch (menuItem) {
    case "Dashboard":
      return <MdDashboard {...props} />;
    case "Calendar":
      return <MdCalendarToday {...props} />;
    default:
      return null;
  }
};

export default MenuIcon;
