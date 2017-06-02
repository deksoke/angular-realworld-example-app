import { Injectable } from '@angular/core';
import { URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { ApiService } from './api.service';
import { Post } from '../models';

@Injectable()
export class PostService {
  constructor (
    private apiService: ApiService
  ) {}

  getAll(): Observable<Post[]> {
    return this.apiService.get('/posts')
           .map(posts => posts);
  }

  getObservableConcatObjects(slug:number, slug2:number): Observable<any>{
    const a = this.apiService.get('/posts/' + slug).map(post => post);
    const b = this.apiService.get('/posts/' + slug2).map(data => data);

    return Observable.concat(a, b);
  }
  getObservableforkJoinObjects(slug:number, slug2:number, slug3:number): Observable<any>{
    const a = this.apiService.get('/posts/' + slug).map(post => post);
    const b = this.apiService.get('/posts/' + slug2).map(data => data);
    const c = this.apiService.get('/posts/' + slug3).map(data => data);

    return Observable.forkJoin(a, b, c);
  }

  get(slug): Observable<Post> {
    return this.apiService.get('/posts/' + slug)
           .map(post => post);
  }

  destroy(slug) {
    return this.apiService.delete('/posts/' + slug);
  }

  save(post): Observable<Post> {
    // If we're updating an existing post
    if (post.slug) {
      return this.apiService.put('/posts/' + post.slug, {post: post})
             .map(data => data.article);

    // Otherwise, create a new post
    } else {
      return this.apiService.post('/posts/', {post: post})
             .map(data => data.post);
    }
  }

}
