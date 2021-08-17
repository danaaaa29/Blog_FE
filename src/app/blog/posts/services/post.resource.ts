import { Injectable } from '@angular/core';
import { apiConfig } from "../../../shared/api-config";
import { HttpClient } from "@angular/common/http";
import { IPost } from "../../model/post-list.model";
import { CreatePostDialog } from "../../model/create-post-dialog.model";



@Injectable()
export class PostResource {
  private readonly URL = apiConfig.url + 'posts';

  constructor(private http: HttpClient) {}

  create(createPost: CreatePostDialog) {
    return this.http.post<CreatePostDialog>(this.URL, createPost);
  }

  findAll() {
    return this.http.get<IPost[]>(this.URL);
  }

  findOne(id: number) {
    return this.http.get<IPost>(`${this.URL}/${id}`);
  }

}
