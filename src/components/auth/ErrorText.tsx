interface Props {
  error: string;
}

const ErrorText: React.FC<Props> = ({ error }) => {
  if (error === "") return null;

  return <small>{error}</small>;
};

export default ErrorText;
