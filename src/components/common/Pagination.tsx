import styled from "@emotion/styled";
import ReactPaginate from "react-paginate";

const Container = styled(ReactPaginate)`
  position: relative;
  top: 2rem;
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;

  li {
    text-align: center;
    width: 20px;
    height: 20px;
    padding: 0.3rem;
    border: 0.3px solid ${({ theme }) => theme.colors.gray};
    color: ${({ theme }) => theme.colors.skyBlue};
    font-weight: 600;

    a {
      width: 100%;
      height: 100%;
    }
  }
  .selected {
    background-color: ${({ theme }) => theme.colors.skyBlue};
    color: white;
  }
`;

interface Props {
  pageCount: number;
  onPageChange: (e: any) => void;
}

const Pagination: React.FC<Props> = ({ pageCount, onPageChange }) => {
  return (
    <Container
      breakLabel="..."
      nextLabel=">>"
      previousLabel="<<"
      pageRangeDisplayed={10}
      activeLinkClassName="active"
      pageCount={pageCount}
      onPageChange={onPageChange}
    />
  );
};

export default Pagination;
