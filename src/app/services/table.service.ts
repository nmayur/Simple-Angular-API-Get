import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TableService {
  private _postsUrl = 'https://jsonplaceholder.typicode.com/posts';
  constructor(public _http: Http) { }

  getPosts() {
    return this._http.get(this._postsUrl)
      .map((response: Response ) => response.json());
  }

}
