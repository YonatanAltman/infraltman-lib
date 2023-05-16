import {Component, OnInit} from '@angular/core';
import {Post, PostService} from "./post.service";

@Component({
  selector: 'test-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {

  posts: Post[] = [];

  constructor(private service: PostService) {
  }

  ngOnInit() {
    this.service.getPosts().subscribe(posts => {
      this.posts = posts
    })
  }

}
