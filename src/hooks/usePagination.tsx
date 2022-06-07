import { useCallback, useEffect, useState } from "react";

const usePagination = (itemsPerPage: number, items: Array<any> = []) => {
  const [currentItems, setCurrentItems] = useState<any>([]);
  const [pageCount, setPageCount] = useState<number>(0);
  const [itemOffset, setItemOffset] = useState<number>(0);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(items.slice(itemOffset, endOffset));
    setPageCount(Math.ceil((items.length ?? 0) / itemsPerPage));
  }, [itemOffset, items, itemsPerPage]);

  const handlePageClick = useCallback(
    (e: any) => {
      setItemOffset((e.selected * itemsPerPage) % items.length);
    },
    [items, itemsPerPage]
  );

  return { currentItems, pageCount, handlePageClick };
};

export default usePagination;
