import { Injectable } from '@angular/core';
import { PostCommentResource } from "./post-comment.resource";
import { IComment } from "../../model/post-comment.model";
import { Observable } from "rxjs";

@Injectable({providedIn: 'root'})
export class PostCommentService {

  constructor(private commentResource: PostCommentResource) {}

  createComment(postId: number, comment: IComment) {
    return this.commentResource.create(postId, comment);
  }

  getAllComments(postId: number) {
    return this.commentResource.findAllByPostId(postId);
  }

  findComment(postId: number, id: number) {
    return this.commentResource.find(postId, id);
  }

  updateComment(postId: number, id: number, comment: IComment) {
    return this.commentResource.update(postId, id, comment);
  }

  deleteComment(postId: number, id: number) {
    return this.commentResource.delete(postId, id);
  }
}
