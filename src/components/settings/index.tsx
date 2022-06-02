import styled from "@emotion/styled";
import { IoSettingsOutline } from "react-icons/io5";

const Container = styled.div`
  display: flex;
  gap: 1rem;
  font-size: 1.5rem;
  color: #7f8490;
  padding: 0.5rem;

  p {
    font-size: 1rem;
    font-weight: 600;
  }
`;

interface Props {
  wideMenu: boolean;
}

const Settings: React.FC<Props> = ({ wideMenu }) => {
  return (
    <Container>
      <IoSettingsOutline />
      <p>{wideMenu && "Settings"}</p>
    </Container>
  );
};

export default Settings;
