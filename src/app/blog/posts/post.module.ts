import { NgModule } from '@angular/core';
import { PostService } from "./services/post.service";
import { PostResource } from "./services/post.resource";
import { CreatePostDialogComponent } from "./dialogs/create-post-dialog.component";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { PostListComponent} from "./post-list.component";
import { PostDetailComponent } from "./post-detail.component";
import {MatIconModule} from "@angular/material/icon";
import {MatCardModule} from "@angular/material/card";
import {MatMenuModule} from "@angular/material/menu";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatCommonModule} from "@angular/material/core";



@NgModule({
  imports: [
    MatIconModule,
    MatCardModule,
    MatMenuModule,
    MatFormFieldModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
    MatCommonModule


  ],
  exports: [],
  declarations: [
    PostListComponent,
    PostDetailComponent,
    CreatePostDialogComponent
  ],
  entryComponents: [
    CreatePostDialogComponent
  ],
  providers: [
    PostService,
    PostResource,
  ],
})
export class PostModule {
}
