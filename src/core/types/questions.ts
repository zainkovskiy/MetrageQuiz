export interface IQuestion {
  UID: number;
  answerType: string;
  answers: IAnswer[];
  question: string;
}
export interface IAnswer {
  UID: number;
  isChecked: boolean;
  title: string;
}
