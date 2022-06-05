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
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    margin-right: 0.5rem;
    width: 20px;
    height: 20px;
  }
`;

interface Props {
  label: string;
  disabled?: boolean;
  color?: string;
  onClick: any;
  icon?: JSX.Element;
}

const Button: React.FC<Props> = ({
  label,
  disabled,
  color = "#6CABDD",
  onClick,
  icon,
}) => {
  return (
    <Container color={color} disabled={disabled} onClick={onClick}>
      {icon && icon}
      {label}
    </Container>
  );
};

export default Button;
