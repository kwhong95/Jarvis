import styled from "@emotion/styled";

const Container = styled.small`
  color: ${({ theme }) => theme.colors.red};
`;

interface Props {
  error: string;
}

const ErrorText: React.FC<Props> = ({ error }) => {
  if (error === "") return null;

  return <Container>{error}</Container>;
};

export default ErrorText;
