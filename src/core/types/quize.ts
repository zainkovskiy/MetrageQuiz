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

// description
// numberOfAttempts
// resultGrid
// rightsEdit
// startDate
// }
