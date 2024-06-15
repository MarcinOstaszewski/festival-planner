export interface IArtist {
  name: string;
  genres: string[];
  description?: string;
}

export interface IConcert {
  artist: IArtist;
  timeStart: string;
  timeFinish: string;
}

export interface IConcertModified {
  artist: IArtist;
  timeStart: number;
  timeFinish: number;
}

export interface IStage {
  name: string;
  concerts: IConcert[];
}

export interface IStageModified {
  name: string;
  concerts: IConcertModified[];
}

export interface IFestivalDay {
  date: string;
  stages: IStage[]
}

export interface IFestivalDayModified {
  date: string;
  stages: IStageModified[];
}

export interface IFestival {
  id: string;
  name: string;
  year: number;
  location?: string;
  description?: string;
  festivalDays: IFestivalDay[];
}

export interface IFestivalModified {
  id: string;
  name: string;
  year: number;
  location?: string;
  description?: string;
  festivalDays: IFestivalDayModified[];
}

export interface IListedFestival {
  id: string;
  name: string;
  datestart: string;
  datefinish: string;
  location: string;
  description: string;
}