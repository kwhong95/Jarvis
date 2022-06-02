import { useContext } from "react";

import { WeatherContext } from "contexts";
import styled from "@emotion/styled";

const Container = styled.div`
  display: flex;
  justify-content: center;
  font-size: 1.125rem;
  gap: 4rem;
`;

const TempInfo = () => {
  const { feels_like, temp_min, temp_max } = useContext<any>(WeatherContext);

  return (
    <Container>
      <div>
        체감온도 <span>{feels_like}&deg;</span>
      </div>
      <div>
        최저온도 <span>{temp_min}&deg;</span>
      </div>
      <div>
        최고온도 <span>{temp_max}&deg;</span>
      </div>
    </Container>
  );
};

export default TempInfo;
