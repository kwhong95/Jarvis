import { useContext } from "react";

import { CurrentWeatherIcon } from "components";
import { WeatherContext } from "contexts";
import styled from "@emotion/styled";

const Container = styled.div`
  padding: 1rem;
  background-color: #252e43;
  border-radius: 12px;
  display: flex;
  gap: 0.5rem;
  font-size: 1.25rem;

  svg {
    width: 25px;
    height: 25px;
  }

  span {
    font-weight: 600;
  }
`;

interface Props {
  onClick?: () => void;
}

const CurrentWeather: React.FC<Props> = ({ onClick }) => {
  const { temp, weatherState } = useContext<any>(WeatherContext);

  return (
    <Container onClick={onClick}>
      <CurrentWeatherIcon weatherState={weatherState} />
      <span>{temp}&deg;</span>
    </Container>
  );
};

export default CurrentWeather;
