import styled from "@emotion/styled";
import { TbCapture } from "react-icons/tb";

const Container = styled.div`
  width: 30px;
  height: 30px;
  color: ${({ theme }) => theme.colors.gray};
  cursor: pointer;

  svg {
    width: 100%;
    height: 100%;
  }
`;

interface Props {
  type: string;
  onClick?: () => void;
}

const Icons = ({ type }: { type: string }) => {
  switch (type) {
    case "Capture":
      return <TbCapture />;
    default:
      return null;
  }
};

const HeaderIcon: React.FC<Props> = ({ type, onClick }) => {
  return (
    <Container onClick={onClick}>
      <Icons type={type} />
    </Container>
  );
};

export default HeaderIcon;
