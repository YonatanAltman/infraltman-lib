import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {ApiService, InfraHttpResponse} from "@infra";

export interface Post {
  title: string;
}

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private api:ApiService) {
  }

  getPosts(): Observable<Post[]> {
    return this.api.get<Post[]>('/posts')
  }
  addPost(post:Post): Observable<InfraHttpResponse> {
    return this.api.post<Post>('/posts',post);
  }
}
