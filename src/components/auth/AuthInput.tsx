import styled from "@emotion/styled";

const Container = styled.div`
  display: flex;
  gap: 0.3rem;
  flex-direction: column;

  label {
    font-weight: 600;
  }

  input {
    background-color: white;
    border: 1px solid ${({ theme }) => theme.colors.gray};
    border-radius: 4px;
    color: ${({ theme }) => theme.colors.gray};
    padding: 1rem;

    :focus {
      outline: none;
    }
  }
`;

interface Props {
  label: string;
  type: string;
  id: string;
  name: string;
  placeholder: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  autoComplete?: string;
}

const AuthInput: React.FC<Props> = ({
  label,
  type,
  id,
  name,
  placeholder,
  onChange,
  value,
  autoComplete,
}) => {
  return (
    <Container>
      <label>{label}</label>
      <input
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        autoComplete={autoComplete}
      />
    </Container>
  );
};

export default AuthInput;
