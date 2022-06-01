import { createPortal } from "react-dom";

interface Props {
  children: React.ReactNode;
  selector: string;
}

const Portal: React.FC<Props> = ({ children, selector }) => {
  const rootElement = document.getElementById(selector);

  return <>{rootElement ? createPortal(children, rootElement) : children}</>;
};

export default Portal;
