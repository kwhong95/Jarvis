import styled from "@emotion/styled";
import SearchInput from "components/common/SearchInput";
import { WeatherWidget } from "widgets";

const Container = styled.header`
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Header = () => {
  return (
    <Container>
      <SearchInput />
      <WeatherWidget />
    </Container>
  );
};

export default Header;
