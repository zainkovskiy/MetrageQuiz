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
export interface IResult {
  number: string;
  isRight: boolean;
}
export interface IQuizeSlide {
  UID: number;
  color: string;
  dueDate: string;
  stageId: number;
  title: string;
  youtubelink: string;
  testData: IQuestion[];
  contentType: string;
  contentURL: string;
  user: IUser;
  numberOfAttempts: number;
  resultGrid: IResult[];
  rightsEdit: boolean;
  description: string;
}
export interface IQuizeForm {
  testData: IQuestion[];
  youtubelink: string;
  contentType: string;
  description: string;
}
export interface IAppointData {
  allChiefs: boolean;
  allInterns: boolean;
  allRealtors: boolean;
  trainingId: number;
}

// const qouzeSlide = {
//   // UID
// // color
// // dueDate
// // stageId
// // title
// // youtubelink
// // testData
// // user
// // contentType
// // contentURL
// numberOfAttempts
// resultGrid

// description
// startDate
// }
