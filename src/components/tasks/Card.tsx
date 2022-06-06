import styled from "@emotion/styled";
import Progress from "react-customizable-progressbar";

const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.navy_2};
  border-radius: 4px;
  height: 110px;
  display: grid;
  grid-template-columns: 2fr 1fr;
  align-items: center;
  padding: 0.5rem 1rem;
  box-shadow: ${({ theme }) => theme.boxShadow.normal};

  p {
    font-size: 1.25rem;
  }

  h2 {
    font-size: 2.5rem;
    font-weight: 600;
  }

  .left {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  .right {
    .percent {
      position: absolute;
      left: 35%;
      top: 40%;
      font-size: 0.875rem;
    }
  }
`;

interface Props {
  label: string;
  value: number;
  color?: string;
}

const TaskCard: React.FC<Props> = ({ label, value, color = "white" }) => {
  return (
    <Container>
      <div className="left">
        <p>{label}</p>
        <h2>{value}</h2>
      </div>
      <div className="right">
        <Progress
          progress={value}
          radius={35}
          strokeColor={color}
          trackStrokeColor="#30384a"
          strokeWidth={12}
          trackStrokeWidth={12}
        >
          <p className="percent" style={{ color: color }}>
            + 50 %
          </p>
        </Progress>
      </div>
    </Container>
  );
};

export default TaskCard;
