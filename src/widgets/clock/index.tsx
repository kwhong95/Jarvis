import { useState, useEffect, useRef } from "react";
import moment from "moment";
import styled from "@emotion/styled";

const Container = styled.div`
  padding: 1rem;
  background-color: #252e43;
  border-radius: 12px;
  font-weight: 600;
`;

const ClockWidget = () => {
  let timer: any = useRef(null);
  const [time, setTime] = useState(moment());

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    timer = setInterval(() => {
      setTime(moment());
    }, 1000 * 60);

    return () => clearInterval(timer);
  }, []);

  return (
    <Container>
      <div>{time.format("MM/DD-HH:mm")}</div>
    </Container>
  );
};

export default ClockWidget;
