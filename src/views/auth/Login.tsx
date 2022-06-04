import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "@emotion/styled";

import { logging, auth } from "configs";
import { AuthWrap } from "wrapper";
import { AuthInput, Button, ErrorText } from "components";

const Container = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 80%;
  margin-top: 2rem;

  small {
    text-align: center;

    a {
      margin: 0.3rem;
      color: ${({ theme }) => theme.colors.darkGold};
      text-decoration: none;
    }
  }
`;

const Login = () => {
  const [authenticating, setAuthenticating] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");

  const navigate = useNavigate();

  const signInWithEmailAndPassword = () => {
    if (error !== "") setError("");

    setAuthenticating(true);

    auth
      .signInWithEmailAndPassword(email, password)
      .then((result) => {
        logging.info(result);
        navigate("/");
      })
      .catch((error) => {
        logging.error(error);
        setAuthenticating(false);
        setError("Unable to sign in. Please try again later.");
      });
  };

  return (
    <Container>
      <AuthInput
        label="Email"
        type="email"
        name="email"
        id="email"
        placeholder="Email Address"
        onChange={(event) => setEmail(event.target.value)}
        value={email}
      />
      <AuthInput
        autoComplete="new-password"
        label="Password"
        type="password"
        name="password"
        id="password"
        placeholder="Enter Password"
        onChange={(event) => setPassword(event.target.value)}
        value={password}
      />
      <Button
        label="Sign In"
        disabled={authenticating}
        onClick={() => signInWithEmailAndPassword()}
      />
      <small>
        <p>
          Don't have an account? <Link to="/register">Register here.</Link>
        </p>
      </small>
      <ErrorText error={error} />
    </Container>
  );
};

export default AuthWrap(Login, "Login");
