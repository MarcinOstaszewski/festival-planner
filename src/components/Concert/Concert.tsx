import React from "react";
import { timelineHeight, topMargin } from "../../constants/constants";
import { IConcertModified } from "../../interfaces/interfaces";

interface IConcertProps {
  name: string;
  index: number;
  stageIndex: number;
  concert: IConcertModified;
  earliestTime: number;
}

const Concert = ({
  name, index, stageIndex, concert, earliestTime
}: IConcertProps) => {
  const {timeStart, timeFinish} = concert;
  const concertDuration = timeFinish - timeStart;
  return (
    <div
      key={index}
      className="concert"
      style={{
        top: stageIndex * timelineHeight + topMargin * 6,
        left: (timeStart - earliestTime),
        width: concertDuration,
      }}
    >
      <span className="artist-name">
        {name}
      </span>
    </div>
  )
}

export default Concert