import React from "react";
import { scrollHeight } from "../../constants/constants";
import { IStageModified } from "../../interfaces/interfaces";
import Concerts from "../Concerts/Concerts";
import HoursLine from "../HoursLine/HoursLine";

interface StagesTimelinesProps {
  stages: IStageModified[];
  totalHeight: number;
  earliestTime: number;
  latestTime: number;
}

const StagesTimelines: React.FC<StagesTimelinesProps> = ({
  stages, totalHeight, earliestTime, latestTime
}) => {
  return (
    <div className="stages-timelines" style={{height: totalHeight + scrollHeight}}>
      <HoursLine earliestTime={earliestTime} latestTime={latestTime} />
      <Concerts stages={stages} earliestTime={earliestTime} />
    </div>
  );
};

export default StagesTimelines;