import { Component, OnInit } from '@angular/core';
import { PostService } from "./services/post.service";
import { IPost } from "../model/post-list.model";
import { MatDialog } from "@angular/material/dialog";
import { CreatePostDialogComponent } from "./dialogs/create-post-dialog.component";
import { Router } from "@angular/router";
import { UpdatePostDialogComponent } from "./dialogs/update-post-dialog.component";




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
 public updatePost = {
   id: 0,
   title: '',
   subTitle: '',
   imageUrl: '',
   content: ''
 }


  constructor(private postService: PostService,
              private matDialog: MatDialog,
              private router: Router) {}

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

  openUpdatePostDialog() {
    const dialogRef = this.matDialog.open(UpdatePostDialogComponent, {
      width: '600px',
    });
    dialogRef.componentInstance.editPostModel = this.updatePost;
    dialogRef.afterClosed().subscribe(res => {
      const index = this.posts.findIndex( editPost => editPost.id === res.id);
      this.posts[index] = res;
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
