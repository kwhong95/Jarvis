import styled from "@emotion/styled";
import { DashboardHeader } from "components";
import DailyWorkList from "./DailyWorkList";

const Container = styled.div``;

const DailyWorkWidget = () => {
  return (
    <Container>
      <DashboardHeader label="Daily Work" />
      <DailyWorkList />
    </Container>
  );
};

export default DailyWorkWidget;
