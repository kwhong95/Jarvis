import styled from "@emotion/styled";
import ProgressBarComp from "@ramonak/react-progress-bar";

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  p {
    font-weight: 500;
  }
`;

interface Props {
  value: number;
  color?: string;
}

const ProgressBar: React.FC<Props> = ({ value, color = "#0083ff" }) => {
  return (
    <Container>
      <ProgressBarComp
        completed={value}
        width="120px"
        height="8px"
        bgColor={color}
        baseBgColor="#30384a"
        isLabelVisible={false}
      />
      <p>{`${value}%`}</p>
    </Container>
  );
};

export default ProgressBar;
