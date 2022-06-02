import styled from "@emotion/styled";

import { CurrentWeatherIcon, Modal } from "components";
import { Tabs } from "components/common/Tabs";
import { WeatherContext } from "contexts";
import { useContext } from "react";
import ExtraInfo from "./ExtraInfo";
import TempInfo from "./TempInfo";

const Container = styled.div`
  width: 100%;
  background-color: #1b2230;
  border-radius: 12px;
  box-shadow: 0 3px 8px 0 rgb(0 0 0 / 10%);
  padding: 1rem 3rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;

  .current-info {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 3rem;

    svg {
      width: 50px;
      height: 50px;
    }
  }
`;

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const DetailsModal: React.FC<Props> = ({ isOpen, onClose }) => {
  const { name, weatherState, temp } = useContext<any>(WeatherContext);

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <Container>
        <div className="current-info">
          <div>{name} / </div>
          <CurrentWeatherIcon weatherState={weatherState} />
          <span>{temp}&deg;</span>
        </div>
        <TempInfo />
        <ExtraInfo />
        <Tabs />
      </Container>
    </Modal>
  );
};

export default DetailsModal;
