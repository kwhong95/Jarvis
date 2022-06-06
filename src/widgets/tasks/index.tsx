import styled from "@emotion/styled";

import TasksTable from "./Table";
import TotalProcess from "./TotalProcess";
import { DashboardHeader } from "components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const Task = () => {
  return (
    <Container>
      <DashboardHeader label="Task Summary" />
      <TotalProcess />
      <TasksTable />
    </Container>
  );
};

export default Task;
