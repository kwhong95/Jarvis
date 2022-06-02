import { useState } from "react";
import { WeatherProvider } from "contexts";
import CurrentWeather from "./CurrentWeather";
import DetailsModal from "./DetailsModal";

const WeatherWidget = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <WeatherProvider>
      <CurrentWeather onClick={handleOpen} />
      <DetailsModal isOpen={isOpen} onClose={handleClose} />
    </WeatherProvider>
  );
};

export default WeatherWidget;
