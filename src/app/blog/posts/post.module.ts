import { NgModule } from '@angular/core';
import { PostService } from "./services/post.service";
import { PostResource } from "./services/post.resource";
import { CreatePostDialogComponent } from "./dialogs/create-post-dialog.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { PostListComponent} from "./post-list.component";
import { PostDetailComponent } from "./post-detail.component";
import { MaterialModule } from "../../shared/material.module";
import { PostCommentComponent } from "./post-comment.component";
import { PostCommentResource } from "./services/post-comment.resource";
import { PostCommentService } from "./services/post-comment.service";
import { PostCommentDetailComponent } from "./post-comment-detail.component";




@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule,
    MaterialModule
  ],
  exports: [
  ],
  declarations: [
    PostListComponent,
    PostDetailComponent,
    CreatePostDialogComponent,
    PostCommentComponent,
    PostCommentDetailComponent
  ],
  entryComponents: [
    CreatePostDialogComponent,
  ],
  providers: [
    PostService,
    PostResource,
    PostCommentResource,
    PostCommentService
  ],
})
export class PostModule {
}
