import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Post } from 'src/interfaces/post.interface';

@Component({
  selector: 'app-post-card',
  templateUrl: 'post-card.component.html',
  styleUrls: ['./post-card.component.scss']
})

export class PostCardComponent {
  @Input() cardInfo: Post;

  cardClicked(): void {
  }

}
