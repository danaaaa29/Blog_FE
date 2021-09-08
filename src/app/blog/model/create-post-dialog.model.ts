export class CreatePostDialog {
  id?: number;
  title?: string;
  subTitle?: string;
  content?: string;
  constructor(init?: Partial<CreatePostDialog>) {
    Object.assign(this, init);
  }
}

