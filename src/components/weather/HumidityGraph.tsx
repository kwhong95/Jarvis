import { useContext } from "react";
import { Bar, BarChart, XAxis } from "recharts";

import { WeatherContext } from "contexts";
import { formatXAxis } from "./utils";
import CustomizedLabel from "./CustomizedLabel";
import { Swiperer } from "components";

const BarGraph = ({ num }: { num: number }) => {
  const { hourly } = useContext<any>(WeatherContext);

  return (
    <BarChart
      width={960}
      height={200}
      data={hourly
        ?.slice(num * 12, (num + 1) * 12)
        .map(({ dt, humidity }: { dt: number; humidity: number }) => ({
          dt,
          humidity,
        }))}
      margin={{ top: 30, right: 30, left: 30, bottom: 10 }}
    >
      <XAxis dataKey="dt" fontSize={15} tickFormatter={formatXAxis} />
      <Bar
        dataKey="humidity"
        fill="#2C6CFF"
        isAnimationActive={false}
        label={<CustomizedLabel cx={30} cy={-2} unit="%" />}
      />
    </BarChart>
  );
};

const HumidityGraph = () => {
  return (
    <Swiperer>
      <BarGraph num={0} />
    </Swiperer>
  );
};

export default HumidityGraph;
