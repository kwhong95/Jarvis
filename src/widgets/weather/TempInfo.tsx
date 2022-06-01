import { useContext } from "react";
import { WeatherContext } from "../../contexts";

const TempInfo = () => {
  const { feels_like, temp_min, temp_max } = useContext<any>(WeatherContext);

  return (
    <div>
      <div>
        체감온도 <span>{feels_like}&deg;</span>
      </div>
      <div>
        최저온도 <span>{temp_min}&deg;</span>
      </div>
      <div>
        최고온도 <span>{temp_max}&deg;</span>
      </div>
    </div>
  );
};

export default TempInfo;
