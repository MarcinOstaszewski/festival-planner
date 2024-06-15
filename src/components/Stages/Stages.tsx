import React from "react";
import { IStageModified } from "../../interfaces/interfaces";
import { scrollHeight, timelineHeight } from "../../constants/constants";
import StagesNames from "../StagesNames/StagesNames";
import StagesTimelines from "../StagesTimelines/StagesTimelines";
import { earliestConcertTime, latestConcertTime } from "../../helpers/Stages.helpers";
import "./Stages.css";

const Stages = ({ stages }: { stages: IStageModified[] }) => {
  const totalHeight = stages.length * timelineHeight;
  const earliestTime = earliestConcertTime(stages);
  const latestTime = latestConcertTime(stages);
  
  return (
    <div className="stages-section" style={{height: totalHeight + scrollHeight}}>
      <StagesTimelines
        stages={stages}
        totalHeight={totalHeight}
        earliestTime={earliestTime}
        latestTime={latestTime}
      />
      <StagesNames stages={stages} />
    </div>
  )
}

export default Stages;