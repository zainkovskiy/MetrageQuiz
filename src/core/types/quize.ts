import { IQuestion } from './questions';
import { IUser } from './user';

export interface IQuize {
  UID: number;
  color: string;
  dueDate: string;
  stageId: number;
  title: string;
  user: IUser;
}
export interface IQouzeSlide {
  UID: number;
  color: string;
  dueDate: string;
  stageId: number;
  title: string;
  youtubelink: string;
  testData: IQuestion[];
  user: IUser;
}
