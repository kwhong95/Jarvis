import { createContext, useEffect, useState } from "react";

export const WeatherContext = createContext({});

interface Props {
  children: React.ReactNode;
}

const WeatherProvider: React.FC<Props> = ({ children }) => {
  const [weatherInfo, setWeatherInfo] = useState({});

  const getWeatherInfo = async () => {
    try {
      const currentWeatherInfoAPI =
        "https://api.openweathermap.org/data/2.5/weather?appid=38dbd27f9c560382f02bd46fc1950107&q=ansan&units=metric";
      const currentWeatherInfo = await fetch(currentWeatherInfoAPI);

      const {
        name,
        coord: { lat, lon },
        main: { temp, humidity, pressure, feels_like, temp_min, temp_max },
        sys: { sunset, sunrise },
        weather: [{ main: weatherState }],
        wind: { speed, deg },
      }: any = await currentWeatherInfo.json();

      const hourlyWeatherInfoAPI = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,daily&appid=38dbd27f9c560382f02bd46fc1950107&units=metric`;
      const hourlyWeatherInfo = await fetch(hourlyWeatherInfoAPI);
      const { hourly } = await hourlyWeatherInfo.json();

      setWeatherInfo({
        name,
        temp,
        humidity,
        pressure,
        weatherState,
        feels_like,
        temp_min,
        temp_max,
        sunset,
        sunrise,
        speed,
        deg,
        hourly,
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getWeatherInfo();
  }, []);

  return (
    <WeatherContext.Provider value={{ ...weatherInfo }}>
      {children}
    </WeatherContext.Provider>
  );
};

export default WeatherProvider;
