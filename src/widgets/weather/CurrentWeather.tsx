import { useContext } from "react";
import CurrentWeatherIcon from "../../components/weather/CurrentWeatherIcon";
import { WeatherContext } from "../../contexts";

const CurrentWeather = () => {
  const { name, temp, weatherState } = useContext<any>(WeatherContext);

  return (
    <div className="container">
      {name} &nbsp;/
      <CurrentWeatherIcon weatherState={weatherState} />
      <span>{temp}&deg;</span>
    </div>
  );
};

export default CurrentWeather;
