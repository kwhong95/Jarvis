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

const NoResult = () => {
  return (
    <Container>
      <p>검색 결과가 존재하지 않습니다.</p>
    </Container>
  );
};

export default NoResult;
