import { Injectable } from "@angular/core";
import { apiConfig } from "../../../shared/api-config";
import { HttpClient } from "@angular/common/http";
import { IComment } from "../../model/post-comment.model";

@Injectable()
export class PostCommentResource {
  private readonly URL = apiConfig.url + 'posts';

  constructor(private http: HttpClient) {}

  create(postId: number, comment: IComment) {
    return this.http.post<IComment>(`${this.URL}/${postId}/comments`, comment);
  }

  findAllByPostId(postId: number) {
    return this.http.get<IComment[]>(`${this.URL}/${postId}/comments`);
  }

  find(postId: number, id: number) {
    return this.http.get<IComment>(`${this.URL}/${postId}/comments/${id}`);
  }

  update(postId: number, id: number, comment: IComment) {
    return this.http.put<IComment>(`${this.URL}/${postId}/comments/${id}`, comment);
  }

  delete(postId: number, id: number) {
    return this.http.delete<IComment>(`${this.URL}/${postId}/comments/${id}`);
  }
}
