import styled from "@emotion/styled";

import { TaskCard } from "components";

const Container = styled.div`
  display: grid;
  grid-template-columns: 3fr 4fr 4fr;
  grid-gap: 1.5rem;
  margin-right: 2rem;
`;

const TotalProcess = () => {
  return (
    <Container>
      <TaskCard label="To-Do" value={80} color="#0083ff" />
      <TaskCard label="In Progress" value={158} color="#fcb620" />
      <TaskCard label="Completed" value={15} color="#22d29b" />
    </Container>
  );
};

export default TotalProcess;
