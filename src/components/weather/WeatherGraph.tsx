import { useContext } from "react";
import { LineChart, XAxis, Line, LabelList } from "recharts";
// Core modules imports are ame as usual
import { Navigation } from "swiper";
// Direct React component imports
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { WeatherContext } from "contexts";
import CurrentWeatherIcon from "./CurrentWeatherIcon";

const formatXAxis = (data: number) => `${new Date(data * 1000).getHours()}시`;

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

const CustomizedLabel = ({
  x,
  y,
  value,
}: {
  x?: number;
  y?: number;
  value?: number;
}) => (
  <text x={x} y={y} dy={-4} fontSize={12} textAnchor="middle" fill="white">
    {value}˚
  </text>
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
        <LabelList content={<CustomizedLabel />} />
      </Line>
    </LineChart>
  );
};

const WeatherGraph = () => {
  const slides = [];

  for (let i = 0; i < 2; i++) {
    slides.push(
      <SwiperSlide key={i}>
        <LineGraph num={i} />
      </SwiperSlide>
    );
  }

  return (
    <Swiper navigation={true} modules={[Navigation]}>
      {slides}
    </Swiper>
  );
};
export default WeatherGraph;
