import { motion } from "framer-motion";
import styled from "@emotion/styled";

export const slideVerticalAnimation = {
  open: {
    rotateX: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
      mass: 0.8,
      type: "spring",
    },
    display: "block",
  },
  close: {
    rotateX: -15,
    y: -320,
    opacity: 0,
    transition: {
      duration: 0.3,
    },
    transitionEnd: {
      display: "none",
    },
  },
};

const Container = styled(motion.div)<{ height: number }>`
  height: ${({ height }) => `${height}px`};

  border-radius: 0.5rem;
  overflow-x: hidden;
  position: absolute;
  top: 0;
  left: 0;
  transition: height 0.5s;
  width: 20rem;
  z-index: 200;
  overflow-y: hidden;
  border: 0.2rem solid white;
`;

interface Props {
  height: number;
  isOpen: boolean;
  children: React.ReactNode;
}

const Dropdown: React.FC<Props> = ({ height, isOpen, children }) => (
  <Container
    initial="close"
    animate={isOpen ? "open" : "close"}
    height={height}
    variants={slideVerticalAnimation}
  >
    {children}
  </Container>
);

export default Dropdown;
