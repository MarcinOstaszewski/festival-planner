import { IConcert, IStage } from "../interfaces/interfaces";

const convertTimeStringToMinutes = (timeString: string) => {
  const hours = parseInt(timeString.split(":")[0]);
  const minutes = parseInt(timeString.split(":")[1]);
  return hours * 60 + minutes;
};

const getConcertDuration = (concert: IConcert) => {
  const start = concert.timeStart;
  const finish = concert.timeFinish;
  const startMinutes = convertTimeStringToMinutes(start);
  const finishMinutes = convertTimeStringToMinutes(finish);
  return finishMinutes - startMinutes;
};

const earliestConcertTime = (stages: IStage[]) => stages.reduce((earliestTime: number, stage) => {
  const stageEarliestTime = stage.concerts.reduce((earliestTime: number, concert) => {
    const concertStartTime = convertTimeStringToMinutes(concert.timeStart);
    return concertStartTime < earliestTime ? concertStartTime : earliestTime;
  }, Infinity);
  return stageEarliestTime < earliestTime ? stageEarliestTime : earliestTime;
}, Infinity);

export { convertTimeStringToMinutes, getConcertDuration, earliestConcertTime };