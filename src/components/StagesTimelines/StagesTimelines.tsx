import React from "react";
import { scrollHeight } from "../../constants/constants";
import { IStageModified } from "../../interfaces/interfaces";
import Concerts from "../Concerts/Concerts";
import HoursLine from "../HoursLine/HoursLine";
import "./StagesTimelines.css";

interface StagesTimelinesProps {
  stages: IStageModified[];
  totalHeight: number;
  earliestTime: number;
  latestTime: number;
}

const StagesTimelines: React.FC<StagesTimelinesProps> = ({
  stages, totalHeight, earliestTime, latestTime
}) => {
  const containerHeight = totalHeight + scrollHeight;
  console.log(latestTime);
  return (
    <div className="scroll-container" style={{height: containerHeight, width: latestTime / 2}}>
      <HoursLine earliestTime={earliestTime} latestTime={latestTime} containerHeight={containerHeight} />
      <Concerts stages={stages} earliestTime={earliestTime} />
    </div>
  );
};

export default StagesTimelines;