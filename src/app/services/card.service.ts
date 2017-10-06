import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CardService {
  private _imgUrl = 'https://jsonplaceholder.typicode.com/photos';

  constructor( public _cardhttp: Http) { }

  getImages(){
    return this._cardhttp.get(this._imgUrl)
      .map((img_response: Response) => img_response.json());
  }

}
