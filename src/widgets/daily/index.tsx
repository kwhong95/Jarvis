import styled from "@emotion/styled";
import { WidgetHeader } from "components";

const Container = styled.div`
  height: 100%;
  article {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const DailyWorkWidget = () => {
  return (
    <Container>
      <WidgetHeader label="Today's Schedule" />
      <article>등록된 일정이 없습니다.</article>
    </Container>
  );
};

export default DailyWorkWidget;
