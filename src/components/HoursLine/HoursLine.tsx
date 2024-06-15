import React from "react";
import "./HoursLine.css";

interface HoursLineProps {
  earliestTime: number;
  latestTime: number;
}

const HoursLine: React.FC<HoursLineProps> = ({
  earliestTime, latestTime
}) => {
  const firstHour = Math.floor(earliestTime / 60);
  const lastHour = Math.floor(latestTime / 60);
  const allConcertsHoursArray = (Array.from({length: lastHour - firstHour + 1}, (_, i) => i + firstHour))
    .map(hour => hour % 24);

  const hoursLine = allConcertsHoursArray.map((hour, index) => {
    return <span className="hour" key={index}>&nbsp;{hour}:00</span>
  });

  return (
    <div className="hours-line">
      {hoursLine}
    </div>
  );
};

export default HoursLine;