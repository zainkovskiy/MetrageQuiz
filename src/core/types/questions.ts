export interface IQuestion {
  UID: number;
  answerType: string;
  answer: IAnswer[];
  question: string;
}
export interface IAnswer {
  UID: number;
  isChecked: boolean;
  title: string;
}
