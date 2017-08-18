import {Component, ElementRef, Injector, OnInit} from '@angular/core';
import {PostsService} from "./service/posts.service";
import {Posts} from "../domain/post/posts";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
})
export class PostsComponent implements OnInit {

  // 포스트 리스트 변수 선언
  protected posts : Posts;

  constructor(private postsService:PostsService ,protected elementRef: ElementRef,
              protected injector: Injector) {


  }

  ngOnInit() {
    this.getposts();
  }

  // 모든 포스트들을 가지고 오는 리스트
  public getposts() {
    this.postsService.getPosts().then((posts) => {
      this.posts = posts;
      console.info('posts',posts);
    });
  }

  // 포스트 디테일 페이지로 이동
  public getDetail() {

  }

}
