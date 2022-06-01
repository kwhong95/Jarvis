import { useContext } from "react";
import { WeatherContext } from "./contexts/weather/WeatherProvider";

const App = () => {
  const weatherInfo = useContext(WeatherContext);

  console.log(weatherInfo);

  return (
    <div className="App">
      <h1>Hello Jarvis~~</h1>
    </div>
  );
};

export default App;
