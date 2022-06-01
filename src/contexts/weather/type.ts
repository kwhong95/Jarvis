export interface WeatherInfo {
  name: string;
  coord: {
    lon: number;
    lat: number;
  };
  main: {
    temp: number;
    humidity: number;
    pressure: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
  };
  sys: {
    sunset: number;
    sunrise: number;
  };
  weather: IWeather[];
  wind: { speed: number; deg: number };
}

interface IWeather {
  main: string;
}
