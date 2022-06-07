import axios from "axios";
import { useLocation } from "react-router-dom";
import { useQuery } from "react-query";
import styled from "@emotion/styled";

import { Pagination } from "components";
import NoResult from "./NoResult";
import SearchTermRequired from "./SearchTermRequired";
import { usePagination } from "hooks";

const API_KEY = process.env.REACT_APP_X_RAPIDAPI_KEY!;

interface ResultItem {
  link: string;
  title: string;
  description: string;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  vertical-align: middle;
  margin: auto;
  width: 700px;

  .item-wrapper {
    margin-top: 2rem;

    .link-wrapper {
      color: ${({ theme }) => theme.colors.gray};
      text-decoration: none;

      .link-text {
        font-size: 0.875rem;
      }

      .link-title {
        font-size: 1.5rem;
        color: ${({ theme }) => theme.colors.skyBlue};

        :hover {
          text-decoration-line: underline;
        }
      }

      .link-description {
        font-size: 0.5rem;
      }
    }
  }
`;

const AllResult = () => {
  const location = useLocation();
  const search = new URLSearchParams(location.search).get("q");

  const { data, isLoading } = useQuery(
    ["allResult", search],
    () =>
      axios
        .get(
          `https://google-search3.p.rapidapi.com/api/v1/search/q=${search}&num=50`,
          {
            headers: {
              "X-RapidAPI-Host": "google-search3.p.rapidapi.com",
              "X-RapidAPI-Key": API_KEY,
            },
          }
        )
        .then((data) => data.data),
    {
      refetchOnWindowFocus: false,
      enabled: !!search,
      cacheTime: 0,
    }
  );

  const { currentItems, pageCount, handlePageClick } = usePagination(
    5,
    data?.results
  );

  // useEffect(() => {
  //   const endOffset = itemOffset + itemsPerPage;
  //   setCurrentItems(data?.results?.slice(itemOffset, endOffset));
  //   setPageCount(Math.ceil((data?.results?.length ?? 0) / itemsPerPage));
  // }, [itemOffset, data?.results]);

  // const handlePageClick = useCallback(
  //   (e: any) => {
  //     setItemOffset((e.selected * itemsPerPage) % data?.results?.length);
  //   },
  //   [data?.results]
  // );

  if (!search) return <SearchTermRequired />;
  if (isLoading) return <p>Loading...</p>;

  return (
    <>
      <Container>
        {data?.results?.length > 0 ? (
          currentItems?.map(
            ({ link, title, description }: ResultItem, idx: number) => (
              <div key={idx} className="item-wrapper">
                <a
                  className="link-wrapper"
                  href={link}
                  target="_blank"
                  rel="noreferrer"
                >
                  <p className="link-text">
                    {link.length > 40 ? link.substring(0, 40) : link}
                  </p>
                  <p className="link-title">{title}</p>
                  <p className="link-description">{description}</p>
                </a>
              </div>
            )
          )
        ) : (
          <NoResult />
        )}
      </Container>
      <Pagination pageCount={pageCount} onPageChange={handlePageClick} />
    </>
  );
};

export default AllResult;
