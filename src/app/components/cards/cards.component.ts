import { Component, OnInit } from '@angular/core';
import { CardService } from '../../services/card.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
  images: any[];
  constructor(private _imgService: CardService) { }

  ngOnInit() {
    this._imgService.getImages()
      .subscribe(resultImagesData => {
        this.images = resultImagesData;
        console.log(resultImagesData);
      });
  }

}
