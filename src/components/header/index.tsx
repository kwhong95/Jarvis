import styled from "@emotion/styled";
import { SearchInput } from "components";
import { ClockWidget, UserWidget, WeatherWidget } from "widgets";

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

const Header = () => {
  return (
    <Container>
      <SearchInput />
      <div className="widgets">
        <WeatherWidget />
        <ClockWidget />
        <UserWidget />
      </div>
    </Container>
  );
};

export default Header;
