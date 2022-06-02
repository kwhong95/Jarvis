import {
  WiDayThunderstorm,
  WiDaySnow,
  WiNa,
  WiDayCloudy,
  WiDaySunny,
  WiDust,
  WiDaySprinkle,
  WiDayRain,
} from "react-icons/wi";

interface Props {
  weatherState:
    | "Clouds"
    | "Haze"
    | "Clear"
    | "Mist"
    | "Rain"
    | "Snow"
    | "ThunderStorm"
    | "Smoke"
    | "Dust"
    | "Fog"
    | "Sand"
    | "Ash"
    | "Squall"
    | "Tornado"
    | "Drizzle";
  x?: number;
  y?: number;
  fontSize?: number;
}

const CurrentWeatherIcon: React.FC<Props> = ({ weatherState, ...props }) => {
  switch (weatherState) {
    case "ThunderStorm":
      return <WiDayThunderstorm {...props} />;
    case "Snow":
      return <WiDaySnow {...props} />;
    case "Clouds":
      return <WiDayCloudy {...props} />;
    case "Clear":
      return <WiDaySunny {...props} />;
    case "Haze":
      return <WiDust {...props} />;
    case "Mist":
      return <WiDust {...props} />;
    case "Smoke":
      return <WiDust {...props} />;
    case "Dust":
      return <WiDust {...props} />;
    case "Fog":
      return <WiDust {...props} />;
    case "Sand":
      return <WiDust {...props} />;
    case "Ash":
      return <WiDust {...props} />;
    case "Squall":
      return <WiDust {...props} />;
    case "Tornado":
      return <WiDust {...props} />;
    case "Rain":
      return <WiDayRain {...props} />;
    case "Drizzle":
      return <WiDaySprinkle {...props} />;
    default:
      return <WiNa {...props} />;
  }
};

export default CurrentWeatherIcon;
