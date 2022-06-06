import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  .detail-link {
    color: #0083ff;
    margin-right: 2rem;
    text-decoration: none;

    :hover {
      border-bottom: 1px solid #0083ff;
    }
  }
`;

interface Props {
  label: string;
  to?: string;
}

const DashboardHeader: React.FC<Props> = ({ label, to = "#" }) => {
  return (
    <Container>
      <h2>{label}</h2>
      <Link to={to} className="detail-link">
        <h4>See All</h4>
      </Link>
    </Container>
  );
};

export default DashboardHeader;
