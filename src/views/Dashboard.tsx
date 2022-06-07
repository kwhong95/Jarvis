import styled from "@emotion/styled";

import {
  DailyWorkWidget,
  IssueFeedWidget,
  TasksWidget,
  TeamsWidget,
} from "widgets";
import { UserWrap } from "wrapper";

const Container = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: 4fr 3fr;
  height: calc(100vh - 80px);
  padding: 1rem;
`;

const Dashboard = () => {
  return (
    <Container>
      <div className="task-summary">
        <TasksWidget />
      </div>
      <div className="daily-work">
        <DailyWorkWidget />
      </div>
      <div className="teams">
        <TeamsWidget />
      </div>
      <div className="issue-feed">
        <IssueFeedWidget />
      </div>
    </Container>
  );
};

export default UserWrap(Dashboard, "Javis | Dashboard");
