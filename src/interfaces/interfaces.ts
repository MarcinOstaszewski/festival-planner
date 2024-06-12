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

export interface IStage {
  name: string;
  concerts: IConcert[];
}

export interface IListedFestival {
  id: string;
  name: string;
  datestart: string;
  datefinish: string;
  location: string;
  description: string;
}

export interface IFestival {
  id: string;
  name: string;
  year: number;
  location?: string;
  description?: string;
  festivalDays: IFestivalDay[];
}

export interface IFestivalDay {
  date: string;
  stages: IStage[]
}