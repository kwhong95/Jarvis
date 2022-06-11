import styled from "@emotion/styled";
import { SearchInput } from "components";
import { UserAccount } from "components";
import useScreenCapture from "wrapper/ScreenCaptureWrap";
import HeaderIcon from "./HeaderIcon";

const Container = styled.header`
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .widgets {
    display: flex;
    gap: 1rem;
  }
`;

interface Props {
  capture: any;
}

const Header: React.FC<Props> = ({ capture }) => {
  return (
    <Container>
      <SearchInput />
      <div className="widgets">
        {/* <WeatherWidget /> */}
        {/* <ClockWidget /> */}
        <HeaderIcon type="Capture" onClick={capture} />
        <UserAccount />
      </div>
    </Container>
  );
};

export default Header;
