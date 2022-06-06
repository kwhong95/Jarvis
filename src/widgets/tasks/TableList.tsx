import styled from "@emotion/styled";
import { useQuery } from "react-query";
import { request } from "graphql-request";

import { getTasks } from "services";
import { GRAPHCMS_API } from "configs/api";
import { Task } from "interfaces";
import { MembersIcon } from "components";

const Container = styled.tbody`
  color: ${({ theme }) => theme.colors.gray};

  .task-item {
    display: grid;
    margin-top: 1rem;
    grid-template-columns: 2fr 1fr 1fr 1fr;
    gap: 2rem;
    align-items: center;
  }
`;

const TableList = () => {
  const { data, isLoading } = useQuery<Array<Task>>("getTasks", async () => {
    const result = await request(GRAPHCMS_API!, getTasks);

    return result.tasks;
  });

  return (
    <Container>
      {data?.map((task, idx) => (
        <tr className="task-item" key={idx}>
          <td className="task-name">{task.title}</td>
          <td className="task-members">
            <MembersIcon members={task.members} />
          </td>
          <td className="task-process">Task Process</td>
          <td className="task-action">Details</td>
        </tr>
      ))}
      {data?.map((task, idx) => (
        <tr className="task-item" key={idx}>
          <td className="task-name">{task.title}</td>
          <td className="task-members">
            <MembersIcon members={task.members} />
          </td>
          <td className="task-process">Task Process</td>
          <td className="task-action">Details</td>
        </tr>
      ))}
    </Container>
  );
};

export default TableList;
