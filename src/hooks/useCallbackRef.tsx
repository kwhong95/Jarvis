import { useState, useCallback } from "react";

const useCallbackRef = () => {
  const [ref, setRef] = useState(null);
  const fn = useCallback((node: any) => {
    setRef(node);
  }, []);

  return [ref, fn];
};

export default useCallbackRef;
