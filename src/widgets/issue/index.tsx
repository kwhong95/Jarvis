import styled from "@emotion/styled";

import { WidgetHeader } from "components";
import FeedList from "./FeedList";

const Container = styled.div`
  height: 100%;
`;

const IssueFeedWidget = () => {
  return (
    <Container>
      <WidgetHeader label="Issue Feed" />
      <FeedList />
    </Container>
  );
};

export default IssueFeedWidget;
