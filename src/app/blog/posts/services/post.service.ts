import { Injectable } from '@angular/core';
import { PostResource } from "./post.resource";
import { CreatePostDialog } from "../../model/create-post-dialog.model";



@Injectable({providedIn: 'root'})
export class PostService {

  constructor(private postResource: PostResource) {}

  createPost(createPost: CreatePostDialog) {
    return this.postResource.create(createPost);
  }

  getAllPosts() {
    return this.postResource.findAll();
  }

  getAllPostsByDate() {
    return this.postResource.findAllByDate();
  }

  getPost(id: number) {
    return this.postResource.findOne(id);
  }

  updatePost(updatePost: CreatePostDialog) {
    return this.postResource.update(updatePost);
  }

  deletePost(id: number) {
    return this.postResource.delete(id);
  }
}
