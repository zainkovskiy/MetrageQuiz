import { IQuize } from '../types/quize';
import { IStages } from '../types/stages';

interface IMeta {
  edTime: number;
  estimated: string;
  stTime: number;
}

export interface ApiModule {
  data: IQuize[];
  rightsToMove: boolean;
  stages: IStages[];
}

export interface ApiModuleOne<T> {
  meta: IMeta;
  request: string;
  result: T;
}

export interface PhotoApiAnswer {
  URL: string;
  allow: boolean;
  height: number;
  original: string;
  width: number;
}
