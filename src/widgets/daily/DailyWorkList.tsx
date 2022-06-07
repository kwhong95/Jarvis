import { useQuery } from "react-query";
import { request } from "graphql-request";
import styled from "@emotion/styled";
import moment from "moment";

import { auth } from "configs";
import { GRAPHCMS_API } from "configs/api";
import { getDailyWork } from "services";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 2rem;
  margin-right: 2rem;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.navy_2};
  padding: 1rem;

  h4 {
    font-size: 1.125rem;
    font-weight: 600;
  }
`;

const DailyWorkList = () => {
  const { displayName }: any = auth.currentUser;
  const today = moment().format("YY:MM:DD");
  const { data } = useQuery(["GetDailyWorks", displayName], async () => {
    const result = await request(GRAPHCMS_API!, getDailyWork, {
      name: displayName,
    });

    return result.member.dailyWorks;
  });

  if (today !== moment(data.createdAt).format("YY:MM:DD"))
    return <p>오늘 할일 등록하기</p>;

  return (
    <Container>
      {data[0].toDoList.text.split(/\\n/).map((text: string) => (
        <>{text.startsWith("[") ? <h4>{text}</h4> : <p>{text}</p>}</>
      ))}
    </Container>
  );
};

export default DailyWorkList;
