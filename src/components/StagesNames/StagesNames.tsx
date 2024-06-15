import React from 'react';
import { IStageModified } from '../../interfaces/interfaces';
import { scrollHeight, timelineHeight, topMargin } from '../../constants/constants';

interface StagesNamesProps {
  stages: IStageModified[];
}

const StagesNames: React.FC<StagesNamesProps> = ({stages}) => {

  const stagesNames = stages.map((stage: IStageModified, index: number) => <>
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

  return (
    <div className="stages-names" key={111}>
      {stagesNames}
    </div>
  );
};

export default StagesNames;