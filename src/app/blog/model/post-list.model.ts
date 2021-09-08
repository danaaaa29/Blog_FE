export interface IPost{
  id: number;
  title: string;
  subTitle?: string;
  content: string;
  likes: number;
  createdAt: Date;
  updatedAt: Date;
}

