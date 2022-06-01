import { WeatherProvider } from "./contexts";
import { WeatherWidget } from "./widgets";

const App = () => {
  return (
    <WeatherProvider>
      <WeatherWidget />
    </WeatherProvider>
  );
};

export default App;
