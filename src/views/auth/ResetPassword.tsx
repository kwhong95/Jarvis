import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
import queryString from "querystring";

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

const ResetPassword = () => {
  const [verifying, setVerifying] = useState<boolean>(true);
  const [verified, setVerified] = useState<boolean>(false);
  const [changing, setChanging] = useState<boolean>(false);
  const [password, setPassword] = useState<string>("");
  const [confirm, setConfirm] = useState<string>("");
  const [oobCode, setOobCode] = useState<string>("");
  const [error, setError] = useState<string>("");

  const { search } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    logging.info("Extracting code");

    let stringParams = queryString.parse(search);

    if (stringParams) {
      let oobCode = stringParams.oobCode as string;

      if (oobCode) {
        logging.info("Code found");
        verifyPasswordResetLink(oobCode);
      } else {
        logging.error("Unable to find code");
        setVerified(false);
        setVerifying(false);
      }
    } else {
      logging.error("Unable to find code");
      setVerified(false);
      setVerifying(false);
    }
    //eslint-disable-next-line
  }, []);

  const verifyPasswordResetLink = (_oobCode: string) => {
    auth
      .verifyPasswordResetCode(_oobCode)
      .then((result) => {
        logging.info(result);
        setOobCode(_oobCode);
        setVerified(true);
        setVerifying(false);
      })
      .catch((error) => {
        logging.error(error);
        setVerified(false);
        setVerifying(false);
      });
  };

  const passwordResetRequest = () => {
    if (password !== confirm) {
      setError("Make sure your passwords are matching");
      return;
    }

    if (error !== "") setError("");

    setChanging(true);

    auth
      .confirmPasswordReset(oobCode, password)
      .then(() => {
        navigate("/login");
      })
      .catch((error) => {
        logging.error(error);
        setError(error.message);
        setChanging(false);
      });
  };

  return (
    <Container>
      {verifying ? (
        <p>loading...</p>
      ) : (
        <>
          {verified ? (
            <>
              <p>Please enter a strong password.</p>
              <AuthInput
                label="Password"
                autoComplete="new-password"
                type="password"
                name="password"
                id="password"
                placeholder="Enter Password"
                onChange={(event) => setPassword(event.target.value)}
                value={password}
              />
              <AuthInput
                label="Confirm Password"
                autoComplete="new-password"
                type="password"
                name="confirm"
                id="confirm"
                placeholder="Confirm Password"
                onChange={(event) => setConfirm(event.target.value)}
                value={confirm}
              />
              <Button
                label="Reset Password"
                disabled={changing}
                onClick={() => passwordResetRequest()}
              />
              <ErrorText error={error} />
            </>
          ) : (
            <p>Invaild link.</p>
          )}
        </>
      )}
    </Container>
  );
};

export default AuthWrap(ResetPassword, "Reset Password");
