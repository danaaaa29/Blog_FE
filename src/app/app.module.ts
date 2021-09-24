import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from "./app-routing.module";
import { PostModule } from "./blog/posts/post.module";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MaterialModule } from "./shared/material.module";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatTabsModule } from "@angular/material/tabs";
import { HomeComponent } from "./home/home.component";


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
    imports: [
        MatToolbarModule,
        MaterialModule,
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        PostModule,
        MatTabsModule,

    ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
