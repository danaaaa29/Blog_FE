import { Component, OnInit } from '@angular/core';
import { IComment } from "../model/post-comment.model";
import { ActivatedRoute } from "@angular/router";
import { PostCommentService } from "./services/post-comment.service";


@Component({
  selector: 'app-post-comment-detail',
  templateUrl: 'post-comment-detail.component.html'
})

export class PostCommentDetailComponent implements OnInit {
  // @ts-ignore
  comment: IComment;
  constructor(private commentService: PostCommentService,
              private route: ActivatedRoute) {}

  ngOnInit() {
    this.commentService.findComment(this.route.snapshot.params['postId'], this.route.snapshot.params['commentId']).subscribe((com: IComment) => {
      this.comment = com;
    })
  }
}
