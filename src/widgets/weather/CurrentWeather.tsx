import { useContext } from "react";

import { CurrentWeatherIcon } from "components";
import { WeatherContext } from "contexts";

interface Props {
  onClick?: () => void;
}

const CurrentWeather: React.FC<Props> = ({ onClick }) => {
  const { name, temp, weatherState } = useContext<any>(WeatherContext);

  return (
    <div className="container" onClick={onClick}>
      {name} &nbsp;/
      <CurrentWeatherIcon weatherState={weatherState} />
      <span>{temp}&deg;</span>
    </div>
  );
};

export default CurrentWeather;
