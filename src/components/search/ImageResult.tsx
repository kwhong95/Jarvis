import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { useQuery } from "react-query";
import styled from "@emotion/styled";

import { Pagination } from "components";
import NoResult from "./NoResult";
import SearchTermRequired from "./SearchTermRequired";

const API_KEY = process.env.REACT_APP_X_RAPIDAPI_KEY!;

interface ResultItem {
  image: {
    src: string;
  };
  link: {
    href: string;
    title: string;
  };
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin: auto;
  width: 900px;

  .item-wrapper {
    padding: 2rem;
    text-decoration: none;

    img {
      :hover {
        box-shadow: ${({ theme }) => theme.boxShadow.navy};
      }
    }

    p {
      width: 50%;
      overflow-wrap: break-word;
      font-weight: 0.75rem;
      margin-top: 1rem;
      color: ${({ theme }) => theme.colors.skyBlue};

      :hover {
        text-decoration-line: underline;
      }
    }
  }
`;

const ImageResult = () => {
  const location = useLocation();
  const search = new URLSearchParams(location.search).get("q");
  const itemsPerPage: number = 4;
  const [currentItems, setCurrentItems] = useState<any>([]);
  const [pageCount, setPageCount] = useState<number>(0);
  const [itemOffset, setItemOffset] = useState<number>(0);

  const { data, isLoading } = useQuery(
    ["imageResult", search],
    () =>
      axios
        .get(
          `https://google-search3.p.rapidapi.com/api/v1/image/q=${search}&num=100`,
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
    setCurrentItems(data?.image_results?.slice(itemOffset, endOffset));
    setPageCount(Math.ceil((data?.image_results?.length ?? 0) / itemsPerPage));
  }, [itemOffset, data?.image_results]);

  const handlePageClick = useCallback(
    (e: any) => {
      setItemOffset((e.selected * itemsPerPage) % data?.image_results?.length);
    },
    [data?.image_results]
  );

  if (!search) return <SearchTermRequired />;
  if (isLoading) return <p>Loading...</p>;

  return (
    <>
      <Container>
        {data?.image_results?.length > 0 ? (
          currentItems?.map(
            (
              { image: { src }, link: { href, title } }: ResultItem,
              idx: number
            ) => (
              <a
                key={idx}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="item-wrapper"
              >
                <img src={src} alt={title} loading="lazy" className="image" />
                <p>{title}</p>
              </a>
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

export default ImageResult;
