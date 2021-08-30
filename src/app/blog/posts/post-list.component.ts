import { Component, OnInit } from '@angular/core';
import { PostService } from "./services/post.service";
import { IPost } from "../model/post-list.model";
import { MatDialog } from "@angular/material/dialog";
import { CreatePostDialogComponent } from "./dialogs/create-post-dialog.component";
import { Router } from "@angular/router";
import { CreatePostDialog } from "../model/create-post-dialog.model";



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
  };
 postColor = '#69f0ae';

  constructor(private postService: PostService,
              private matDialog: MatDialog,
              private router: Router) {}

  ngOnInit() {
    this.postService.getAllPostsByDate().subscribe((res: IPost[]) => {
      this.posts = res;
    });
  }

  openCreateDialogPost() {
    const dialogRef = this.matDialog.open(CreatePostDialogComponent, {
      width: '600px',
      data: {post: new CreatePostDialog()}
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

  openUpdatePostDialog(post: IPost) {
    const dialogRef = this.matDialog.open(CreatePostDialogComponent, {
      width: '600px',
      data: { post: post}
    });
    dialogRef.afterClosed().subscribe(updatePost => {
      if (updatePost) {
        const index = this.posts.findIndex( editPost => editPost.id === updatePost.id);
        this.posts[index] = updatePost;
      }
    });
  }

  deletePost(id: number) {
    if (id) {
      this.postService.deletePost(id).subscribe(() => {
        const index = this.posts.findIndex( deletePost => deletePost.id === id);
        this.posts.splice(index, 1);
      });
    }
  }
}
