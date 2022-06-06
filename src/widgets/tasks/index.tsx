import styled from "@emotion/styled";
import TasksTable from "./Table";
import TotalProcess from "./TotalProcess";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .detail-btn {
    color: #0083ff;
    margin-right: 2rem;

    :hover {
      border-bottom: 1px solid #0083ff;
    }
  }
`;

const Task = () => {
  return (
    <Container>
      <div className="header">
        <h2>Task Summary</h2>
        <div className="detail-btn">
          <h4>See All</h4>
        </div>
      </div>
      <TotalProcess />
      <TasksTable />
    </Container>
  );
};

export default Task;
