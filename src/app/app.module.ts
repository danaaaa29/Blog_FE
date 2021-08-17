import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from "./app-routing.module";
import { PostModule } from "./blog/posts/post.module";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MaterialModule } from "./shared/material.module";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    MatToolbarModule,
    MaterialModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    PostModule,

  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
