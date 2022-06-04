import styled from "@emotion/styled";

import { Modal } from "components";

const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.gray};
  border-radius: 4px;
  padding: 1rem;
`;

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const SettingsModal: React.FC<Props> = ({ isOpen, onClose }) => {
  return (
    <Modal width={400} isOpen={isOpen} onClose={onClose}>
      <Container>
        <div className="title">
          <h3>Settings</h3>
        </div>
      </Container>
    </Modal>
  );
};

export default SettingsModal;
