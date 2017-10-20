import { Component, OnInit } from '@angular/core';
import { TableService } from '../../services/table.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})

export class TableComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  posts: any[];
  constructor( private _postService: TableService) { }
  ngOnInit() {
    this.dtOptions = {
      pagingType: 'numbers',
      searching: true,
      pageLength: 20,
      ordering: true
    };

    this._postService.getPosts()
      .subscribe( resultPostsData => {
        this.posts = resultPostsData;
       } );
      // .subscribe(posts => {
      //   console.log(posts);
      // });
  }
}
