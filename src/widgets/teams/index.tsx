import styled from "@emotion/styled";
import { useQuery } from "react-query";
import { request } from "graphql-request";

import { WidgetHeader, TeamCard } from "components";
import { GRAPHCMS_API } from "configs/api";
import { getTeams } from "services";
import { Team } from "interfaces";

const Container = styled.div`
  display: flex;
  flex-direction: column;

  .team-cards {
    margin-top: 1rem;
    height: 100%;
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: 1fr 1fr 1fr;
    margin-right: 2rem;
  }
`;

const TeamsWidget = () => {
  const { data } = useQuery<Array<Team>>("getTeams", async () => {
    const result = await request(GRAPHCMS_API!, getTeams);

    return result.teams;
  });

  const colors = ["#fcb620", "#0083ff", "#22d29b"];

  return (
    <Container>
      <WidgetHeader label="Teams" />
      <div className="team-cards">
        {data?.map((team, idx) => (
          <TeamCard
            key={team.name}
            url={team.photo && team.photo.url}
            name={team.name}
            members={team.members}
            tag={team.tag}
            color={colors[idx]}
          />
        ))}
      </div>
    </Container>
  );
};

export default TeamsWidget;
