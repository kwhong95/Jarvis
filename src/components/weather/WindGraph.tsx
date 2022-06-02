import { useContext } from "react";
import { Bar, BarChart, LabelList, XAxis } from "recharts";
import {
  WiDirectionDown,
  WiDirectionDownLeft,
  WiDirectionLeft,
  WiDirectionUpLeft,
  WiDirectionUp,
  WiDirectionUpRight,
  WiDirectionRight,
  WiDirectionDownRight,
} from "react-icons/wi";

import CustomizedLabel from "./CustomizedLabel";
import { WeatherContext } from "contexts";
import { formatXAxis } from "./utils";
import { Swiperer } from "components";

const WindDirection = ({ deg = 0, ...props }: ContentProps) => {
  switch (true) {
    case (337.5 <= deg && deg <= 360) || (0 <= deg && deg < 22.5):
      return <WiDirectionDown {...props} />;
    case 22.5 <= deg && deg < 67.5:
      return <WiDirectionDownLeft {...props} />;
    case 67.5 <= deg && deg < 112.5:
      return <WiDirectionLeft {...props} />;
    case 112.5 <= deg && deg < 157.5:
      return <WiDirectionUpLeft {...props} />;
    case 157.5 <= deg && deg < 202.5:
      return <WiDirectionUp {...props} />;
    case 202.5 <= deg && deg < 247.5:
      return <WiDirectionUpRight {...props} />;
    case 247.5 <= deg && deg < 292.5:
      return <WiDirectionRight {...props} />;
    case 292.5 <= deg && deg < 337.5:
      return <WiDirectionDownRight {...props} />;
    default:
      return null;
  }
};

interface ContentProps {
  deg?: number;
  x?: number;
  y?: number;
  value?: number;
  fontSize?: number;
}

const CustomizedContent = ({ x = 0, y = 0, value }: ContentProps) => (
  <WindDirection deg={value} x={x + 15} y={y - 40} fontSize={25} />
);

const BarGraph = ({ num }: { num: number }) => {
  const { hourly } = useContext<any>(WeatherContext);

  return (
    <BarChart
      width={960}
      height={200}
      data={hourly
        ?.slice(num * 12, (num + 1) * 12)
        .map(
          ({
            dt,
            wind_speed,
            wind_deg,
          }: {
            dt: number;
            wind_speed: number;
            wind_deg: number;
          }) => ({
            dt,
            wind_speed,
            wind_deg,
          })
        )}
      margin={{ top: 30, right: 30, left: 30, bottom: 10 }}
    >
      <XAxis dataKey="dt" fontSize={15} tickFormatter={formatXAxis} />
      <Bar
        dataKey="wind_speed"
        fill="#00DD93"
        isAnimationActive={false}
        label={<CustomizedLabel cx={30} cy={-2} unit="m/s" />}
      >
        <LabelList dataKey="wind_deg" content={<CustomizedContent />} />
      </Bar>
    </BarChart>
  );
};

const WindGraph = () => {
  return (
    <Swiperer>
      <BarGraph num={0} />
    </Swiperer>
  );
};

export default WindGraph;
