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

const Register = () => {
  const [registering, setRegistering] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirm, setConfirm] = useState<string>("");
  const [error, setError] = useState<string>("");

  const navigate = useNavigate();

  const signUpWithEmailAndPassword = () => {
    if (password !== confirm) {
      setError("Please make sure your passwords match.");
      return;
    }

    if (error !== "") setError("");

    setRegistering(true);
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        logging.info(result);
        navigate("/login");
      })
      .catch((error) => {
        logging.error(error);

        if (error.code.includes("auth/weak-password")) {
          setError("Please enter a stronger password.");
        } else if (error.code.includes("auth/email-already-in-use")) {
          setError("Eamil already in use.");
        } else {
          setError("Unable to register. Please try again later.");
        }

        setRegistering(false);
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
      <AuthInput
        autoComplete="new-password"
        label="Confirm Password"
        type="password"
        name="confirm"
        id="confirm"
        placeholder="Confirm Password"
        onChange={(event) => setConfirm(event.target.value)}
        value={confirm}
      />
      <Button
        label="Sign Up"
        disabled={registering}
        onClick={() => signUpWithEmailAndPassword()}
      />
      <small>
        <p>
          Already have an account? <Link to="/login">Login.</Link>
        </p>
      </small>
      <ErrorText error={error} />
    </Container>
  );
};

export default AuthWrap(Register, "Register");
