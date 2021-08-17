import { Component, OnInit } from '@angular/core';
import { CreatePostDialog } from "../../model/create-post-dialog.model";
import { NgForm } from "@angular/forms";
import { PostService } from "../services/post.service";
import { MatDialogRef } from "@angular/material/dialog";

@Component({
  selector: 'app-create-post-dialog',
  templateUrl: 'create-post-dialog.component.html'
})

export class CreatePostDialogComponent implements OnInit {
  newPostModel: CreatePostDialog = {
    title: '',
    subTitle: '',
    imageUrl: '',
    content: ''
  };
  hintColor = '#69f0ae';
  constructor(private postService: PostService,
              private dialogRef: MatDialogRef<CreatePostDialogComponent>) {}

  ngOnInit() {}

  submit(form: NgForm){
    if (form.valid) {
      this.postService.createPost(this.newPostModel)
        .subscribe( (res) => {
          this.dialogRef.close(res);
      });
    }
  }
}
