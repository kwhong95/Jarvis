import { useContext } from "react";
import { LineChart, XAxis, Line, LabelList } from "recharts";

import { WeatherContext } from "contexts";
import CurrentWeatherIcon from "./CurrentWeatherIcon";
import { formatXAxis } from "./utils";
import CustomizedLabel from "./CustomizedLabel";
import Swiperer from "components/common/Swiperer";

const CustomizedDot = ({
  payload,
  cx,
  cy,
}: {
  payload?: any;
  cx?: number;
  cy?: number;
}) => (
  <CurrentWeatherIcon
    weatherState={payload.weather}
    x={cx! - 13}
    y={cy! - 5}
    fontSize={25}
  />
);

const LineGraph = ({ num }: { num: number }) => {
  const { hourly } = useContext<any>(WeatherContext);

  return (
    <LineChart
      width={960}
      height={200}
      data={hourly
        ?.slice(num * 12, (num + 1) * 12)
        .map(
          ({
            dt,
            temp,
            weather,
          }: {
            dt: number;
            temp: number;
            weather: any;
          }) => ({
            dt,
            temp,
            weather: weather[0].main,
          })
        )}
      margin={{
        top: 30,
        right: 30,
        left: 30,
        bottom: 10,
      }}
    >
      <XAxis dataKey="dt" fontSize={15} tickFormatter={formatXAxis} />
      <Line
        dataKey="temp"
        stroke="#3cb371"
        strokeWidth={2}
        dot={<CustomizedDot />}
        isAnimationActive={false}
      >
        <LabelList content={<CustomizedLabel unit="˚" />} />
      </Line>
    </LineChart>
  );
};

const WeatherGraph = () => {
  return (
    <Swiperer>
      <LineGraph num={0} />
    </Swiperer>
  );
};
export default WeatherGraph;
