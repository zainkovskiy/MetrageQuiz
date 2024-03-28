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
// rightsEdit
// startDate
// }
