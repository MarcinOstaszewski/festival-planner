import React, { useEffect, useState } from 'react';
import { IFestival } from '../../interfaces/interfaces';
import { festivalService } from '../../services/festivalService';
import './Festival.css';

const Festival: React.FC = () => {
  const festivalId = window.location.pathname.split('/').pop();

  const [festival, setFestival] = useState<IFestival | null>(null);

  useEffect(() => {
    if (!festivalId) return;
    festivalService.fetchFestival(festivalId, setFestival);
  }, [festivalId]);

  console.log(festival);
  const festivalDays = festival?.festivalDays.map((day) => (
    <li key={day.date} className="festival-day">
      {day.date}
    </li>
  ));


  return (
    <div className="festival-container">
      <h1 className="header-1">{festival?.name}</h1>
      <ul className="festival-days">
        {festivalDays}
      </ul>
    </div>
  )
};

export default Festival;