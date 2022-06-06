import styled from "@emotion/styled";

import TableList from "./TableList";

const Container = styled.table`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  thead {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 1fr;
    justify-items: flex-start;
  }

  th {
    font-size: 1.25rem;
    font-weight: 600;
  }
`;

const TasksTable = () => {
  return (
    <Container>
      <thead>
        <th>Task Name</th>
        <th>Member</th>
        <th>Task Process</th>
        <th>Action</th>
      </thead>
      <TableList />
    </Container>
  );
};

export default TasksTable;
