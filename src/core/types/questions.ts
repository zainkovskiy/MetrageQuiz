export interface IQuestion {
  UID: number;
  answerType: string;
  answers: IAnswer[];
  question: string;
  imageUrl?: string;
}
export interface IAnswer {
  UID: number;
  isChecked: boolean;
  isRightOption: boolean;
  title: string;
}
