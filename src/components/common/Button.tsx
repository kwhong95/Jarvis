import styled from "@emotion/styled";

const Container = styled.button<{ color: string }>`
  background-color: ${({ color }) => color};
  border: none;
  border-radius: 4px;
  height: 40px;
  cursor: pointer;
  box-shadow: ${({ theme }) => theme.boxShadow.normal};
  font-weight: 600;
  color: white;
`;

interface Props {
  label: string;
  disabled?: boolean;
  color?: string;
  onClick: any;
}

const Button: React.FC<Props> = ({
  label,
  disabled,
  color = "#6CABDD",
  onClick,
}) => {
  return (
    <Container color={color} disabled={disabled} onClick={onClick}>
      {label}
    </Container>
  );
};

export default Button;
