import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Post, PostService } from '../../shared';

@Component({
  selector: 'app-simple-tables',
  templateUrl: './simple-tables.component.html',
  styleUrls: ['./simple-tables.component.css']
})
export class SimpleTablesComponent implements OnInit {

  posts: Post[];
  isLoading: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private postService: PostService
  ) { }

  ngOnInit() {
    //Retreive the posts
    //this.populatePosts();
    this.testHttpRequestReturnObservableWithForkJoinObjects();
  }

  private testHttpRequestReturnObservableWithConcatObjects(){
    var item1:Post;
    var item2: Post;
    this.postService.getObservableConcatObjects(3, 6)
      .subscribe(
        x => console.log(x),
        e => console.log(e),
        () => {
          this.populatePosts();
      });
  }
  private testHttpRequestReturnObservableWithForkJoinObjects(){
    this.postService.getObservableforkJoinObjects(3, 6, 20)
      .subscribe(
        items => {
          console.log(items[0]);
          console.log(items[1]);
          console.log(items[2]);
          this.populatePosts();
      });
  }

  private populatePosts(){
    this.postService.getAll()
      .subscribe(posts => {
        this.posts = posts;
      });
  }

  editPost(post: Post){

  }

  private savePost(post: Post){

  }

  deletePost(post: Post){
    this.postService.destroy(post.id)
      .subscribe(success => {
        this.populatePosts();
      });
  }
}
