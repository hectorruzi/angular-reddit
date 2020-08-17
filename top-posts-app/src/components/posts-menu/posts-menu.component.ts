import { Component, OnInit, Input } from '@angular/core';
import { Post } from 'src/interfaces/post.interface';

@Component({
  selector: 'app-posts-menu',
  templateUrl: 'name.component.html'
})

export class PostsMenuComponent implements OnInit {
  @Input() postCards: Post[];
  constructor() { }

  ngOnInit(): void { }
}
