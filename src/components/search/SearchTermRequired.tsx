import styled from "@emotion/styled";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;

  p {
    font-size: 3rem;
    color: ${({ theme }) => theme.colors.gray};
  }
`;

const SearchTermRequired = () => {
  return (
    <Container>
      <p>검색어를 입력해주세요.</p>
    </Container>
  );
};

export default SearchTermRequired;
