import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import styled from "@emotion/styled";

import { WeatherGraph, HumidityGraph } from "components";
import { useMeasure } from "hooks";
import Pager from "./Pager";
import WindGraph from "components/weather/WindGraph";

const TabContainer = styled.div`
  width: 100%;
  overflow-y: hidden;
  box-shadow: none;
`;

const TabList = styled.div`
  display: block;
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  border-bottom: 1px solid gray;
  border-top: 1px solid gray;
`;

const TabItem = styled(motion.button)<{ isActive: boolean }>`
  white-space: normal;
  -webkit-appearance: none;
  box-sizing: border-box;
  text-align: center;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
  user-select: none;
  outline: none;
  -webkit-tap-highlight-color: transparent;
  box-shadow: none;
  cursor: pointer;
  text-decoration: none;
  border-width: initial;
  border-style: none;
  border-color: initial;
  border-image: initial;
  padding: 10px 1rem;
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  text-size-adjust: none;
  text-overflow: ellipsis;
  line-height: 1.5;
  font-size: 0.875rem;
  font-weight: 600;
  color: ${({ isActive }) => (isActive ? "#6CABDD" : "#7f8490")};
  background-color: inherit;
  margin: 0px;
  overflow: hidden;
`;

const Slider = styled(motion.div)`
  height: 2px;
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
  margin-left: 2px;
  margin-right: 2px;
  bottom: 0;
  position: absolute;
  background: #6cabdd;
`;

const TabPannel = styled.div`
  width: 100%;
  height: 100%;
`;

const tabs = ["날씨", "습도", "바람"];

const Tabs = () => {
  const [value, setValue] = useState(0);
  const childRefs = useRef(new Map());
  const tabListRef = useRef<HTMLDivElement>(null!);
  const [slider, setSlider] = useState({ left: 0, right: 0, hasValue: false });
  const { bounds, ref } = useMeasure();

  // measure of elements
  useEffect(() => {
    const target = childRefs.current.get(value);
    const container = tabListRef.current;
    if (target) {
      const cRect = container.getBoundingClientRect();

      if (cRect.width === 0) {
        return;
      }

      const tRect = target.getBoundingClientRect();
      const left = tRect.left - cRect.left;
      const right = cRect.right - tRect.right;

      setSlider({
        hasValue: true,
        left: left + 8,
        right: right + 8,
      });
    }
  }, [value, bounds]);

  return (
    <div>
      <TabContainer ref={ref}>
        <TabList ref={tabListRef}>
          {tabs.map((tab: string, i: number) => (
            <TabItem
              key={tab}
              isActive={i === value}
              transition={{ duration: 0.1 }}
              ref={(el) => childRefs.current.set(i, el)}
              onClick={() => setValue(i)}
            >
              {tab}
            </TabItem>
          ))}
          {slider.hasValue && (
            <Slider
              transition={{ bounceDamping: 3 }}
              initial={false}
              style={{
                left: slider.left,
                right: slider.right,
              }}
            />
          )}
        </TabList>
      </TabContainer>
      <Pager value={value}>
        <TabPannel>
          <WeatherGraph />
        </TabPannel>
        <TabPannel>
          <HumidityGraph />
        </TabPannel>
        <TabPannel>
          <WindGraph />
        </TabPannel>
      </Pager>
    </div>
  );
};

export default Tabs;
