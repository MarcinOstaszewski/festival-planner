import React from "react";
import { IStage } from "../../interfaces/interfaces";
import "./Stages.css";
import {
  convertTimeStringToMinutes,
  getConcertDuration,
  earliestConcertTime
} from "../../helpers/Stages.helpers";

const Stages = ({ stages }: { stages: IStage[] }) => {
  const earliestTime = earliestConcertTime(stages);
  const timelineHeight = 60;
  const scrollHeight = 3;
  const topMargin = 4;
  const totalHeight = stages.length * timelineHeight;

  const stagesNames = stages.map((stage, index) => <>
    <div
      className="stage-name" 
      key={index}
      style={{top: index * timelineHeight + topMargin}}
    >
      {stage.name}
    </div>
    <div className="stage-underline"
      style={{top: (index + 1) * timelineHeight - 2 * scrollHeight}}/>
  </>);

  const timelines = stages.map((stage, stageIndex) => {
    return <>
      {stage.concerts.map((concert, index) => {
        const concertStart = convertTimeStringToMinutes(concert.timeStart) - earliestTime;
        const concertDuration = getConcertDuration(concert);
        console.log(concert, concertStart, concertDuration);
        return (
          <div
            key={index}
            className="concert"
            style={{
              top: stageIndex * timelineHeight + topMargin * 3,
              left: concertStart,
              width: concertDuration,
            }}
          >
            <span className="artist-name">
              {concert.artist.name}
            </span>
          </div>
        )
      })}
    </>
  });
  
  return (
    <div className="stages-section" style={{height: totalHeight + scrollHeight}}>
      <div className="timelines" style={{height: totalHeight + scrollHeight}}>
        {timelines}
      </div>
      <div className="stages-names">
        {stagesNames}
      </div>
    </div>
  );
}

export default Stages;