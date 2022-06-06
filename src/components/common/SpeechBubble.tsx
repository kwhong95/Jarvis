import styled from "@emotion/styled";

const Container = styled.div`
  position: relative;
  background: ${({ theme }) => theme.colors.navy_2};
  border-radius: 0.4em;
  color: white;
  display: flex;
  align-items: center;
  padding: 0.3rem;
  box-shadow: ${({ theme }) => theme.boxShadow.normal};
  transition: 0.3s;
  min-width: 80px;

  :after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 0;
    height: 0;
    border: 10px solid transparent;
    border-top-color: ${({ theme }) => theme.colors.navy_2};
    border-bottom: 0;
    border-left: 0;
    margin-left: -5px;
    margin-bottom: -10px;
  }
`;

interface Props {
  label: string;
}

const SpeechBubble: React.FC<Props> = ({ label }) => {
  return (
    <Container>
      <small>
        <p>{label}</p>
      </small>
    </Container>
  );
};

export default SpeechBubble;
