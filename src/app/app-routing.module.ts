import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostDetailComponent } from "./blog/posts/post-detail.component";
import { PostListComponent } from "./blog/posts/post-list.component";

const routes: Routes = [
  { path: '', component: PostListComponent },
  { path: 'view-post/:id', component: PostDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
