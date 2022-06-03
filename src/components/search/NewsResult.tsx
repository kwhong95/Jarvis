import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { useQuery } from "react-query";
import styled from "@emotion/styled";

import { Pagination } from "components";
import NoResult from "./NoResult";
import SearchTermRequired from "./SearchTermRequired";

const API_KEY = process.env.REACT_APP_X_RAPIDAPI_KEY!;

interface LinkItem {
  href: string;
  rel: string;
  type: string;
}

interface ResultItem {
  links: LinkItem[];
  source: {
    href: string;
    title: string;
  };
  title: string;
  published: Date;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  margin: auto;
  width: 700px;

  .item-wrapper {
    margin-top: 2rem;
    border: 1px solid ${({ theme }) => theme.colors.gray};
    border-radius: 8px;
    padding: 1rem;
    width: 700px;
    color: ${({ theme }) => theme.colors.gray};
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    .link {
      color: ${({ theme }) => theme.colors.skyBlue};
      text-decoration: none;

      p {
        font-size: 1.25rem;
      }

      :hover {
        text-decoration-line: underline;
      }
    }

    .source-link {
      a {
        color: ${({ theme }) => theme.colors.gray};
        text-decoration: none;
      }
    }

    .date {
      font-size: 0.5rem;
    }
  }
`;

const NewsResult = () => {
  const location = useLocation();
  const search = new URLSearchParams(location.search).get("q");
  const itemsPerPage: number = 4;
  const [currentItems, setCurrentItems] = useState<any>([]);
  const [pageCount, setPageCount] = useState<number>(0);
  const [itemOffset, setItemOffset] = useState<number>(0);

  const { data, isLoading } = useQuery(
    ["newsResult", search],
    () =>
      axios
        .get(
          `https://google-search3.p.rapidapi.com/api/v1/news/q=${search}&num=50`,
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

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(data?.entries?.slice(itemOffset, endOffset));
    setPageCount(Math.ceil((data?.entries?.length ?? 0) / itemsPerPage));
  }, [itemOffset, data?.entries]);

  const handlePageClick = useCallback(
    (e: any) => {
      setItemOffset((e.selected * itemsPerPage) % data?.entries?.length);
    },
    [data?.entries]
  );

  if (!search) return <SearchTermRequired />;
  if (isLoading) return <p>Loading...</p>;

  return (
    <>
      <Container>
        {data?.entries?.length > 0 ? (
          currentItems?.map(
            ({ links, source, title, published }: ResultItem, idx: number) => (
              <div key={idx} className="item-wrapper">
                <a
                  href={links[0].href}
                  target="_blank"
                  rel="noreferrer"
                  className="link"
                >
                  <p>{title}</p>
                </a>
                <div className="source-link">
                  <a href={source.href} target="_blank" rel="noreferrer">
                    {source.href}
                  </a>
                </div>
                <p className="date">{published.toLocaleString()}</p>
              </div>
            )
          )
        ) : (
          <NoResult />
        )}
      </Container>
      <Pagination onPageChange={handlePageClick} pageCount={pageCount} />
    </>
  );
};

export default NewsResult;
