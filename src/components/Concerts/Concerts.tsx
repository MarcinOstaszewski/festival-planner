import React from "react"; 
import { IStageModified } from "../../interfaces/interfaces";
import Concert from "../Concert/Concert";

interface ConcertProps {
  stages: IStageModified[];
  earliestTime: number;
}

const Concerts: React.FC<ConcertProps> = ({
  stages, earliestTime
}) => {
  
  return <>
    {stages.map((stage: IStageModified, stageIndex: number) => {
      return <>
        {stage.concerts.map((concert, index) => {
          return (
            <Concert
              index={index}
              name={concert.artist.name}
              stageIndex={stageIndex}
              concert={concert}
              earliestTime={earliestTime}
            />
          )
        })}
      </>
    })}
  </>;
};

export default Concerts;