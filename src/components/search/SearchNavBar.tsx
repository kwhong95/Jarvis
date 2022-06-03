import { useEffect } from "react";
import { useLocation, NavLink } from "react-router-dom";
import styled from "@emotion/styled";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5rem;
  margin-top: 2rem;
  width: 100%;
  height: 50px;
  border-bottom: 0.5px solid ${({ theme }) => theme.colors.gray};

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.gray};
  }
`;

const SearchNavBar = () => {
  const { search, pathname } = useLocation();

  console.log(search);
  console.log(pathname);

  useEffect(() => {}, []);

  return (
    <Container>
      <NavLink
        style={({ isActive }) => ({ color: isActive ? "#6CABDD" : "#7f8490" })}
        to={`/search/all${search}`}
      >
        통합
      </NavLink>
      <NavLink
        style={({ isActive }) => ({ color: isActive ? "#6CABDD" : "#7f8490" })}
        to={`/search/news${search}`}
      >
        뉴스
      </NavLink>
      <NavLink
        style={({ isActive }) => ({ color: isActive ? "#6CABDD" : "#7f8490" })}
        to={`/search/image${search}`}
      >
        이미지
      </NavLink>
    </Container>
  );
};

export default SearchNavBar;
