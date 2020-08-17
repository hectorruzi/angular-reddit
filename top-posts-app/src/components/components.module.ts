import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsMenuComponent } from './posts-menu/posts-menu.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { PostCardComponent } from './post-card/post-card.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    PostCardComponent,
    PostDetailComponent,
    PostsMenuComponent
  ]
})
export class ComponentsModule { }
