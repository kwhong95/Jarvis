import { useState, KeyboardEvent, useEffect, useCallback } from "react";
import { useSearchParams } from "react-router-dom";
import styled from "@emotion/styled";
import { FaSearch } from "react-icons/fa";

const Container = styled.div`
  position: relative;
  width: 50%;

  input {
    color: white;
    width: 100%;
    border-radius: 12px;
    background-color: #252e43;
    margin: 8px 0;
    outline: none;
    border: none;
    padding: 1rem;
    transition: 0.3s;
    padding-left: 40px;
  }

  svg {
    color: #7f8490;
  }

  .icon {
    position: absolute;
    left: 0;
    top: 14px;
    padding: 10px 14px;
  }

  input:focus {
    border-color: #252e43;
    box-shadow: 0 0 8px 9 #252e43;
  }
`;

const SearchInput = () => {
  const [searchText, setSearchText] = useState<string>("");
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    setSearchText(searchParams.get("q") ?? "");
  }, [searchParams]);

  const onChangeInput = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearchText(e.target.value);
    },
    []
  );

  const onKeyUp = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && e.currentTarget.value.trim().length > 0) {
      setSearchParams({ q: e.currentTarget.value });
    }
  };

  return (
    <Container>
      <FaSearch className="icon" />
      <input
        value={searchText}
        type="text"
        placeholder="General Search..."
        onChange={onChangeInput}
        onKeyUp={onKeyUp}
      />
    </Container>
  );
};

export default SearchInput;
