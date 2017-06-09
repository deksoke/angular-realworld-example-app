import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Post, DataModel, PostService, DataService } from '../../shared';

declare var $:any;

@Component({
  selector: 'app-simple-tables',
  templateUrl: './simple-tables.component.html',
  styleUrls: ['./simple-tables.component.css']
})
export class SimpleTablesComponent implements OnInit {

  posts: Post[];
  isLoading: boolean = false;
  datas: DataModel[];

  maxSize: number = 5;
  public totalItems: number = 64;
  public currentPage: number = 4;
  public smallnumPages: number = 0;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private postService: PostService,
    private dataService: DataService
  ) { 

  }

  ngOnInit() {
    //Retreive the posts
    //this.populatePosts();
    //this.testHttpRequestReturnObservableWithForkJoinObjects();

    this.getPage(1);
  }

  getPage(page:number){
    this.dataService.getDataByPage(page)
      .subscribe(res => {
        this.currentPage = res.pageIndex;
        this.totalItems = res.pageTotal;
        this.datas = res.data;
      });
  }

  public setPage(pageNo: number): void {
    this.currentPage = pageNo;
  }
 
  public pageChanged(event: any): void {
    this.getPage(event.page);
    console.log('Page changed to: ' + event.page);
    console.log('Number items per page: ' + event.itemsPerPage);
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
          //console.log(items[0]);
          //console.log(items[1]);
          //console.log(items[2]);
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

  confirmDelete(post: Post){
    var self = this;
    $.confirm({
    title: 'Confirm! Delete ',
    content: post.title,
    buttons: {
        confirm: function () {
            self.deletePost(post);
        },
        cancel: function () {
            //$.alert('Canceled!');
        }
    }
});
  }

  deletePost(post: Post){
    console.log('deletePost');
    this.postService.destroy(post.id)      .subscribe(success => {        this.populatePosts();      });
  }
}
