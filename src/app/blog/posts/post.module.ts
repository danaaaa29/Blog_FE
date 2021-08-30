import { NgModule } from '@angular/core';
import { PostService } from "./services/post.service";
import { PostResource } from "./services/post.resource";
import { CreatePostDialogComponent } from "./dialogs/create-post-dialog.component";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { PostListComponent} from "./post-list.component";
import { PostDetailComponent } from "./post-detail.component";
import { MaterialModule } from "../../shared/material.module";




@NgModule({
  imports: [
    FormsModule,
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
  ],
  entryComponents: [
    CreatePostDialogComponent,
  ],
  providers: [
    PostService,
    PostResource,
  ],
})
export class PostModule {
}
