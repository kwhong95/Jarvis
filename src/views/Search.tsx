import styled from "@emotion/styled";
import { SearchNavBar } from "components";
import { Outlet } from "react-router-dom";

const Container = styled.div``;

const Search = () => {
  return (
    <Container>
      <SearchNavBar />
      <Outlet />
    </Container>
  );
};

export default Search;
