import { dayStartInMinutes } from "../constants/constants";
import { IConcert, IConcertModified, IFestivalDay, IFestivalDayModified, IStage, IStageModified } from "../interfaces/interfaces";

const convertTimeStringToMinutes = (timeString: string) => {
  const hours = parseInt(timeString.split(":")[0]);
  const minutes = parseInt(timeString.split(":")[1]);
  return hours * 60 + minutes;
};

const earliestConcertTime = (stages: IStageModified[]) => stages
  .reduce((earliestTime: number, stage: IStageModified) => stage.concerts
    .reduce((earliestTime: number, concert: IConcertModified) => concert.timeStart < earliestTime ? concert.timeStart : earliestTime, earliestTime), Infinity);

const latestConcertTime = (stages: IStageModified[]) => stages.reduce((latestTime: number, stage: IStageModified) => {
  const stageLatestTime = stage.concerts.reduce((latestTime: number, concert: IConcertModified) => concert.timeFinish > latestTime ? concert.timeFinish : latestTime, latestTime);
  return stageLatestTime > latestTime ? stageLatestTime : latestTime;
}, 0);


const modifyConcertTimes = (concert: IConcert): IConcertModified => {
  const { artist, timeStart, timeFinish } = concert;
  const concertStartTime = convertTimeStringToMinutes(timeStart);
  const concertFinishTime = convertTimeStringToMinutes(timeFinish);
  const newConcertStartTime = concertStartTime < dayStartInMinutes ? concertStartTime + 24 * 60 : concertStartTime;
  const newConcertFinishTime = concertFinishTime < dayStartInMinutes ? concertFinishTime + 24 * 60 : concertFinishTime;
  return { artist, timeStart: newConcertStartTime, timeFinish: newConcertFinishTime };
};

const modifyConcertsTimes = (concerts: IConcert[]): IConcertModified[] => concerts.map(modifyConcertTimes);

const modifyStageTimes = (stage: IStage): IStageModified => ({
  name: stage.name,
  concerts: modifyConcertsTimes(stage.concerts)
});

const modifyStagesTimes = (stages: IStage[]): IStageModified[] => stages.map(modifyStageTimes);

const modifyFestivalDay = (festivalDay: IFestivalDay): IFestivalDayModified => ({
  date: festivalDay.date,
  stages: modifyStagesTimes(festivalDay.stages)
});

const modifyFestivalDaysTimes = (festivalDays: IFestivalDay[]): IFestivalDayModified[] => (
  festivalDays.map((festivalDay: IFestivalDay) => (
    modifyFestivalDay(festivalDay)
  ))
);

export {
  convertTimeStringToMinutes,
  earliestConcertTime,
  latestConcertTime,
  modifyFestivalDaysTimes,
};