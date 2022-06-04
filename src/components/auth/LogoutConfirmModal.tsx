import styled from "@emotion/styled";
import { Button, Modal } from "components";
import { auth, logging } from "configs";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.navy};
  border-radius: 4px;
  text-align: center;
  padding: 1rem;
  display: flex;
  align-items: center;
  gap: 2rem;

  button {
    padding: 0 1rem;
  }
`;

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const LogoutConfirmModal: React.FC<Props> = ({ isOpen, onClose }) => {
  const navigate = useNavigate();

  const Logout = () => {
    auth
      .signOut()
      .then(() => navigate("/login"))
      .catch((error) => logging.error(error));
  };

  return (
    <Modal width={400} isOpen={isOpen} onClose={onClose}>
      <Container>
        <h3>Are you sure you want to log out?</h3>
        <Button color="#EC3325" label="Logout" onClick={() => Logout()} />
      </Container>
    </Modal>
  );
};

export default LogoutConfirmModal;
