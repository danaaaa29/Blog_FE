import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostDetailComponent } from "./blog/posts/post-detail.component";
import { PostListComponent } from "./blog/posts/post-list.component";
import { PostCommentComponent } from "./blog/posts/post-comment.component";
import { PostCommentDetailComponent } from "./blog/posts/post-comment-detail.component";
import { HomeComponent } from "./home/home.component";



const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'posts', component: PostListComponent },
  { path: 'view-post/:postId', component: PostDetailComponent },
  { path: 'posts/:postId/comments', component: PostCommentComponent },
  { path: 'posts/:postId/comments/:commentId', component: PostCommentDetailComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
