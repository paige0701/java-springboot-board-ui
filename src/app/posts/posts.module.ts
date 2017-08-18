import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsComponent } from './posts.component';
import { PostsService } from "./service/posts.service";
import { RouterModule } from "@angular/router";
import { PostDetailComponent } from './post-detail/post-detail.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: "", component: PostsComponent},
    ])
  ],
  declarations: [ PostsComponent, PostDetailComponent],
  providers : [PostsService],
  exports: [
    RouterModule
  ],
})
export class PostsModule { }
