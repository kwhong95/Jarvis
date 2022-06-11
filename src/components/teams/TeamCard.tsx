import styled from "@emotion/styled";

import { ProgressBar } from "components";
import MembersIcon from "components/tasks/MembersIcon";
import { Member } from "interfaces";

const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.navy_2};
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border-radius: 4px;
  box-shadow: ${({ theme }) => theme.boxShadow.normal};
  height: 100%;

  img {
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    width: 100%;
  }

  .content {
    padding: 0 1rem;
    padding-bottom: 1rem;

    h3 {
      font-size: 1rem;
    }
  }

  .tag {
    border-radius: 4px;
    background-color: ${({ theme }) => theme.colors.navy};
    width: 60px;
    height: 15px;
    margin-top: 0.5rem;
    box-shadow: ${({ theme }) => theme.boxShadow.navy};

    padding: 0.5rem;

    p {
      font-size: 0.875rem;
      text-align: center;
    }
  }

  .progress-members {
    display: flex;
    gap: 2rem;
  }
`;

interface Props {
  name: string;
  tag: string;
  url: string;
  color: string;
  members: Array<Member>;
}

const TeamCard: React.FC<Props> = ({
  name,
  tag,
  url = "#",
  color,
  members,
}) => {
  return (
    <Container>
      <div className="image">
        <img width={280} height={150} src={url} alt={name} />
      </div>
      <div className="content">
        <h3>{name}</h3>
        <div className="tag">
          <p style={{ color }}>{tag}</p>
        </div>
        <div className="progress-members">
          <ProgressBar value={89} />
          <MembersIcon members={members} />
        </div>
      </div>
    </Container>
  );
};

export default TeamCard;
