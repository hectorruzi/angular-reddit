import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, from } from 'rxjs';
import { map } from 'rxjs/operators';
import { Post } from '../interfaces/post.interface';

@Injectable({
  providedIn: 'root',
})

export class PostsManager {
  $topPosts: BehaviorSubject<Post[]> = new BehaviorSubject(null);
  topPosts: Post[];
  constructor(private http: HttpClient) {
    this.http.get('./assets/mocks/top-posts.json')
      .pipe(map((data: { data }) => data.data.children))
      .subscribe(data => {
        this.topPosts = data;
        this.$topPosts.next(data);
      });
  }

  getTopPosts(): BehaviorSubject<Post[]> {
    return this.$topPosts;
  }

  setPostClicked(id: string): void {
    this.topPosts.some(post => {
      if (post.data.id === id) {
        post.data.clicked = true;
        return true;
      }
      return false;
    });
    this.$topPosts.next(this.topPosts);
  }

  dismissPost(id: string): void {
    this.topPosts.some(post => {
      if (post.data.id === id) {
        post.data.hidden = true;
        return true;
      }
      return false;
    });
    this.$topPosts.next(this.topPosts);
  }

}
