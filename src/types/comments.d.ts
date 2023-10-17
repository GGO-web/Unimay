export interface IComment {
  id: string;
  user: string;
  isAuth: boolean;
  comment: string;
  timestamp: Date;
  replies?: IComment[];
}

export interface IComments {
  id: string;
  user: string;
  isAuth: boolean;
  comment: string;
  timestamp: Date;
  replies?: IComment[];
}
[];
