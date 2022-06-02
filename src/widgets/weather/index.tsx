import { useState } from "react";
import Modal from "../../components/common/Modal";
import { WeatherProvider } from "contexts";
import CurrentWeather from "./CurrentWeather";
import ExtraInfo from "./ExtraInfo";

import TempInfo from "./TempInfo";

const WeatherWidget = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <WeatherProvider>
      <CurrentWeather onClick={handleOpen} />
      <Modal isOpen={isOpen} onClose={handleClose}>
        <CurrentWeather />
        <TempInfo />
        <ExtraInfo />
      </Modal>
    </WeatherProvider>
  );
};

export default WeatherWidget;
