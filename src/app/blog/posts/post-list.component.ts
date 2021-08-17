import {Component, OnInit} from '@angular/core';
import { PostService } from "./services/post.service";
import { IPost } from "../model/post-list.model";
import { MatDialog } from "@angular/material/dialog";
import { CreatePostDialogComponent } from "./dialogs/create-post-dialog.component";
import { ActivatedRoute, Router } from "@angular/router";


@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html'
})

export class PostListComponent implements OnInit {
  public posts: IPost[] = [];
  public post: IPost = {
    id: 0,
    title: '',
    subTitle: '',
    imageUrl: '',
    content: '',
    status: true
  };
 postColor = '#69f0ae';


  constructor(private postService: PostService,
              private matDialog: MatDialog,
              private router: Router,
              private route: ActivatedRoute) {}

  ngOnInit() {
    this.postService.getAllPosts().subscribe((res: IPost[]) => {
      this.posts = res;
    });
  }

  openCreateDialogPost() {
    const dialogRef = this.matDialog.open(CreatePostDialogComponent, {
      width: '600px',
    });
    dialogRef.afterClosed().subscribe(newPost => {
      if (newPost) {
        this.posts.push(newPost);
      }
    });
  }

  openView(post: {id: number}) {
    this.router.navigate(['/view-post', post.id]);
  }
}
