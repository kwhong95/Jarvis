import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  h2 {
    font-size: 1.25rem;
  }

  .detail-link {
    color: ${({ theme }) => theme.colors.blue};
    margin-right: 2rem;
    text-decoration: none;

    :hover {
      border-bottom: 1px solid ${({ theme }) => theme.colors.blue};
    }
  }
`;

interface Props {
  label: string;
  to?: string;
}

const WidgetHeader: React.FC<Props> = ({ label, to = "#" }) => {
  return (
    <Container>
      <h2>{label}</h2>
      <Link to={to} className="detail-link">
        <h4>See All</h4>
      </Link>
    </Container>
  );
};

export default WidgetHeader;
