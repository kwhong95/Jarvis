import { useContext, useState } from "react";
import Modal from "../../components/common/Modal";
import CurrentWeatherIcon from "../../components/weather/CurrentWeatherIcon";
import { WeatherContext } from "../../contexts";
import TempInfo from "./TempInfo";

const CurrentWeather = () => {
  const { name, temp, weatherState } = useContext<any>(WeatherContext);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <>
      <div className="container" onClick={handleOpen}>
        {name} &nbsp;/
        <CurrentWeatherIcon weatherState={weatherState} />
        <span>{temp}&deg;</span>
      </div>
      <Modal isOpen={isOpen} onClose={handleClose}>
        <TempInfo />
      </Modal>
    </>
  );
};

export default CurrentWeather;
