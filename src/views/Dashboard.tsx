import styled from "@emotion/styled";

import { TasksWidget } from "widgets";
import { UserWrap } from "wrapper";

const Container = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: 3fr 2fr;
  height: calc(100vh - 80px);
  padding: 1rem;
`;

const Dashboard = () => {
  return (
    <Container>
      <div className="task-summary">
        <TasksWidget />
      </div>
      <div className="schedule">Today's Schedule</div>
      <div className="teams">Teams</div>
      <div className="issue-feed">Issue Feed</div>
    </Container>
  );
};

export default UserWrap(Dashboard, "Javis | Dashboard");
