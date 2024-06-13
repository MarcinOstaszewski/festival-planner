import React, { useEffect, useState } from 'react';
import { IFestival, IStage } from '../../interfaces/interfaces';
import { festivalService } from '../../services/festivalService';
import FestivalDays from '../FestivalDays/FestivalDays';
import './Festival.css';
import Stages from '../Stages/Stages';

type mouseEvent = React.MouseEvent<HTMLLIElement, MouseEvent>;

const Festival: React.FC = () => {
  const festivalId = window.location.pathname.split('/').pop();

  const [festival, setFestival] = useState<IFestival | null>(null);
  const [stages, setStages] = useState<IStage[] | undefined>(undefined);

  useEffect(() => {
    if (!festivalId) return;
    festivalService.fetchFestival(festivalId, setFestival);
  }, [festivalId]);

  const handleDayClick = (e: mouseEvent) => {
    const dayClicked = festival?.festivalDays.filter(day => day.date === e.currentTarget.id)[0];
    setStages(dayClicked?.stages);
  }

  return (
    <div className="festival-container">
      <div className="festival-header-and-days">
        <h1 className="header-1">{festival?.name}</h1>
        <ul className="festival-days">
          <FestivalDays
            handleDayClick={handleDayClick}
            festivalDays={festival?.festivalDays || []}
          />
        </ul>
      </div>
      {stages ? (
        <Stages stages={stages} />
        ) : (
        <div className="select-day">Select a festival day above. ^</div>
        )
      }
    </div>
  )
};

export default Festival;