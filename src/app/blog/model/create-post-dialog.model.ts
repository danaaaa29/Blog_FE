export class CreatePostDialog {
  id?: number;
  title?: string;
  subTitle?: string;
  imageUrl?: string;
  content?: string;
  constructor(init?: Partial<CreatePostDialog>) {
    Object.assign(this, init);
  }
}

