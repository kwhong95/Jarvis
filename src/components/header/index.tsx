import styled from "@emotion/styled";
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
      <div />
      <WeatherWidget />
    </Container>
  );
};

export default Header;
