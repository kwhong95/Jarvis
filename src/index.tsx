import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import WeatherProvider from "./contexts/weather/WeatherProvider";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <WeatherProvider>
      <App />
    </WeatherProvider>
  </React.StrictMode>
);

serviceWorkerRegistration.register();
