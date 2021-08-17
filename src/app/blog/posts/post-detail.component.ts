import { Component, OnInit } from '@angular/core';
import { IPost } from "../model/post-list.model";
import { ActivatedRoute, Params } from "@angular/router";
import { PostService } from "./services/post.service";

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html'
})

export class PostDetailComponent implements OnInit {
  post: IPost = {
    id: 0,
    title: '',
    subTitle: '',
    imageUrl: '',
    content: '',
    status: true
  };
  postColor = '#69f0ae';

  constructor(private postService: PostService,
              private route: ActivatedRoute) {}

  ngOnInit() {
    this.postService.getPost(this.route.snapshot.params['id']).subscribe((res: IPost) => {
      this.post = res;
    })
  }
}
