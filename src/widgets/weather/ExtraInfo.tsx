import { useContext } from "react";
import { WiHumidity, WiStrongWind, WiSunrise, WiSunset } from "react-icons/wi";

import { WeatherContext } from "../../contexts";

const WindDirectionText = ({ deg = 0 }) => {
  switch (true) {
    case (337.5 <= deg && deg <= 360) || (0 <= deg && deg < 22.5):
      return "북풍";
    case 22.5 <= deg && deg < 67.5:
      return "북동풍";
    case 67.5 <= deg && deg < 112.5:
      return "동풍";
    case 112.5 <= deg && deg < 157.5:
      return "남동풍";
    case 157.5 <= deg && deg < 202.5:
      return "남풍";
    case 202.5 <= deg && deg < 247.5:
      return "남서풍";
    case 247.5 <= deg && deg < 292.5:
      return "서풍";
    case 292.5 <= deg && deg < 337.5:
      return "북서풍";
    default:
      return "";
  }
};

const ExtraInfo = () => {
  const { humidity, speed, deg, sunset, sunrise } =
    useContext<any>(WeatherContext);

  return (
    <div>
      <div className="extra-info-item">
        <WiSunrise />
        <p>
          {new Date(sunrise * 1000).toLocaleString("en-US", {
            hour: "numeric",
            minute: "numeric",
            hour12: true,
          })}
          <br />
          일출
        </p>
      </div>
      <div className="extra-info-item">
        <WiSunset />
        <p>
          {new Date(sunset * 1000).toLocaleString("en-US", {
            hour: "numeric",
            minute: "numeric",
            hour12: true,
          })}
          <br />
          일몰
        </p>
      </div>
      <div className="extra-info-item">
        <WiHumidity />
        <p>
          {`${humidity}%`}
          <br />
          습도
        </p>
      </div>
      <div className="extra-info-item">
        <WiStrongWind />
        <p>
          {`${speed}m/s`} ({WindDirectionText(deg)})
          <br />
          바람
        </p>
      </div>
    </div>
  );
};

export default ExtraInfo;
