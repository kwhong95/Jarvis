import { useState } from "react";
import { useNavigate } from "react-router-dom";
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

const ChangePassword = () => {
  const [changing, setChanging] = useState<boolean>(false);
  const [password, setPassword] = useState<string>("");
  const [old, setOld] = useState<string>("");
  const [confirm, setConfirm] = useState<string>("");
  const [error, setError] = useState<string>("");

  const navigate = useNavigate();

  const passwordChangeRequest = () => {
    if (password !== confirm) {
      setError("Please make sure your passwords match.");
      return;
    }

    if (error !== "") setError("");

    setChanging(true);

    auth.currentUser
      ?.updatePassword(password)
      .then(() => {
        logging.info("Password change successful.");
        navigate("/");
      })
      .catch((error) => {
        logging.error(error);
        setChanging(false);
        setError(error.message);
      });
  };

  if (auth.currentUser?.providerData[0]?.providerId !== "password")
    return navigate("/");

  return (
    <Container>
      <AuthInput
        autoComplete="new-password"
        label="Old Password"
        type="password"
        name="oldPassword"
        id="oldPassword"
        placeholder="Current Password"
        onChange={(event) => setOld(event.target.value)}
        value={old}
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
        label="Password"
        type="password"
        name="confirm"
        id="confirm"
        placeholder="Confirm Password"
        onChange={(event) => setConfirm(event.target.value)}
        value={confirm}
      />
      <Button
        label="Change Password"
        disabled={changing}
        onClick={() => passwordChangeRequest()}
      />
      <ErrorText error={error} />
    </Container>
  );
};

export default AuthWrap(ChangePassword as any, "Change Password");
