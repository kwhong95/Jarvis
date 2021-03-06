import { CSSTransition } from "react-transition-group";
import styled from "@emotion/styled";

import Portal from "./Portal";

const Overlay = styled.div`
  position: fixed;
  z-index: 10;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Dim = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;

const Container = styled.div<{ width: number }>`
  width: ${({ width }) => `${width}px`};
  position: relative;
`;

interface Props {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
  width?: number;
  selector?: string;
}

const Modal: React.FC<Props> = ({
  children,
  isOpen,
  onClose,
  width = 1050,
  selector = "#modal-root",
}) => (
  <CSSTransition in={isOpen} timeout={300} classNames="modal" unmountOnExit>
    <Portal selector={selector}>
      <Overlay>
        <Dim onClick={onClose} />
        <Container width={width}>{children}</Container>
      </Overlay>
    </Portal>
  </CSSTransition>
);

export default Modal;
