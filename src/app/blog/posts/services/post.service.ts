import { Injectable } from '@angular/core';
import { PostResource } from "./post.resource";
import { CreatePostDialog } from "../../model/create-post-dialog.model";
import { UpdatePostDialog } from "../../model/update-post-dialog.model";


@Injectable({providedIn: 'root'})
export class PostService {

  constructor(private postResource: PostResource) {}

  createPost(createPost: CreatePostDialog) {
    return this.postResource.create(createPost);
  }

  getAllPosts() {
    return this.postResource.findAll();
  }

  getPost(id: number) {
    return this.postResource.findOne(id);
  }

  updatePost(id: number, updatePost: UpdatePostDialog) {
    return this.postResource.update(id, updatePost);
  }

  deletePost(id: number) {
    return this.postResource.delete(id);
  }
}
