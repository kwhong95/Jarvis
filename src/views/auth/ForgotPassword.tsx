import { useState } from "react";
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

const ForgotPassword = () => {
  const [sending, setSending] = useState<boolean>(false);
  const [sent, setSent] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [error, setError] = useState<string>("");

  const resetPasswordRequest = () => {
    if (error !== "") setError("");

    setSending(true);

    auth
      .sendPasswordResetEmail(email)
      .then(() => {
        logging.info("Email sent.");
        setSent(true);
        setSending(false);
      })
      .catch((error) => {
        logging.error(error);
        setError(error.message);
        setSending(false);
      });
  };

  return (
    <Container>
      {sent ? (
        <p>A link has been sent to your email with instructions.</p>
      ) : (
        <>
          <p>Please enter your email.</p>
          <AuthInput
            label="Email"
            type="email"
            name="email"
            id="email"
            placeholder="Email Address"
            onChange={(event) => setEmail(event.target.value)}
            value={email}
          />
          <Button
            label="Send Reset Link"
            disabled={sending}
            onClick={() => resetPasswordRequest()}
          />
          <ErrorText error={error} />
        </>
      )}
    </Container>
  );
};

export default AuthWrap(ForgotPassword, "Forgot Password");
