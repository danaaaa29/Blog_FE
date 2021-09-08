import { Component, Inject, OnInit } from '@angular/core';
import { CreatePostDialog } from "../../model/create-post-dialog.model";
import { NgForm } from "@angular/forms";
import { PostService } from "../services/post.service";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";


@Component({
  selector: 'app-create-post-dialog',
  templateUrl: 'create-post-dialog.component.html'
})

export class CreatePostDialogComponent implements OnInit {
  // @ts-ignore
  postModel: CreatePostDialog;
  hintColor = '#69f0ae';


  constructor(private postService: PostService,
              private dialogRef: MatDialogRef<CreatePostDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: {post: CreatePostDialog}) {}

  ngOnInit() {
      this.postModel = this.data.post;
  }

  submit(form: NgForm){
    if (form.valid) {
      if (this.postModel.id) {
        this.postService.updatePost(this.postModel)
          .subscribe((res) => {
            this.dialogRef.close(res);
          })
      }
      else {
        this.postService.createPost(this.postModel)
          .subscribe( (res) => {
            this.dialogRef.close(res);
          });
      }
    }
  }
}
