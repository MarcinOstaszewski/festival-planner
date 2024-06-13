import React from "react";
import { IFestivalDay } from "../../interfaces/interfaces";

interface IFestivalDaysProps {
  festivalDays: IFestivalDay[];
  handleDayClick: (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => void;
}

const FestivalDays = ({
  festivalDays, handleDayClick
}: IFestivalDaysProps) => {
  
  const days = festivalDays.map((day) => (
    <li
      key={day.date}
      id={day.date}
      className="festival-day"
      onClick={handleDayClick}>
      {day.date}
    </li>
  ));

  return <>{days}</>;
};

export  default FestivalDays;