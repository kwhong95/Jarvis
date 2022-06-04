import { useState } from "react";
import { logging, auth } from "configs";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [registering, setRegistering] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirm, setConfirm] = useState<string>("");
  const [error, setError] = useState<string>("");

  const navigate = useNavigate();

  const signUpWithEmailAndPassword = () => {
    if (error !== "") setError("Please make sure your passwords match.");

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

  return <div>Resister</div>;
};

export default Register;
