import styled from "@emotion/styled";
import { useQuery } from "react-query";
import { request } from "graphql-request";
import { AiOutlineInfoCircle } from "react-icons/ai";

import { getTasks } from "services";
import { GRAPHCMS_API } from "configs/api";
import { Task } from "interfaces";
import { MembersIcon, ProgressBar } from "components";

const Container = styled.tbody`
  color: ${({ theme }) => theme.colors.gray};

  .task-name {
    font-size: 1.125rem;
    font-weight: 600;
  }

  .task-item {
    display: grid;
    margin-top: 1rem;
    grid-template-columns: 2fr 1fr 1fr 1.15fr;
    gap: 2rem;
    align-items: center;
  }

  .task-members {
    margin-left: 1rem;
  }

  .task-action {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
`;

const TableList = () => {
  const { data } = useQuery<Array<Task>>("getTasks", async () => {
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
          <td className="task-process">
            <ProgressBar value={89} />
          </td>
          <td className="task-action">
            <p>Details</p>
            <AiOutlineInfoCircle />
          </td>
        </tr>
      ))}
    </Container>
  );
};

export default TableList;
