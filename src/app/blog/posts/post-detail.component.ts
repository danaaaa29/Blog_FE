import { Component, OnInit } from '@angular/core';
import { IPost } from "../model/post-list.model";
import { ActivatedRoute, Router } from "@angular/router";
import { PostService } from "./services/post.service";

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html'
})

export class PostDetailComponent implements OnInit {
  // @ts-ignore
  post: IPost;
  postColor = '#69f0ae';

  constructor(private postService: PostService,
              private route: ActivatedRoute,
              private router: Router) {}

  ngOnInit() {
    this.postService.getPost(this.route.snapshot.params['postId']).subscribe((res: IPost) => {
      this.post = res;
    })
  }

  replyPost(postId: number) {
    this.router.navigate(['posts', postId, 'comments']);
  }
}
