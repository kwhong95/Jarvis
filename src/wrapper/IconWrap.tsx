import styled from "@emotion/styled";

const Container = styled.div<{ wideMenu: boolean }>`
  display: flex;
  align-items: center;
  color: #7f8490;
  gap: 1rem;
  width: ${({ wideMenu }) => (wideMenu ? "80%" : "35%")};
  border-radius: 12px;
  padding: 1rem;
  cursor: pointer;
  transition: 0.3s;
  font-size: 1.825rem;

  :hover {
    background-color: #0083ff;
    color: white;
  }

  p {
    font-size: 1rem;
    font-weight: 600;
  }
`;

interface Props {
  children: React.ReactNode;
  wideMenu: boolean;
  onClick?: () => void;
}

const IconWrap: React.FC<Props> = ({ children, wideMenu, onClick }) => {
  return (
    <Container onClick={onClick} wideMenu={wideMenu}>
      {children}
    </Container>
  );
};

export default IconWrap;
