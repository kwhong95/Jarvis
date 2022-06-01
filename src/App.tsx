import { WeatherProvider } from "./contexts";
import { CurrentWeather } from "./widgets";

const App = () => {
  return (
    <WeatherProvider>
      <CurrentWeather />
    </WeatherProvider>
  );
};

export default App;
