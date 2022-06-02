import { useState, useLayoutEffect } from "react";
import { useCallbackRef } from "../hooks";

const useMeasure = () => {
  const [element, attachRef] = useCallbackRef();
  const [bounds, setBounds] = useState({});

  useLayoutEffect(() => {
    const onReSize = ([entry]: [entry: any]) => {
      setBounds({
        height: entry.contentRect.height,
        width: entry.contentRect.width,
      });
    };

    const observer = new ResizeObserver(onReSize as any);

    if (element) {
      observer.observe(element as any);
    }

    return () => {
      observer.disconnect();
    };
  }, [element]);

  return {
    bounds,
    ref: attachRef,
  };
};

export default useMeasure;
