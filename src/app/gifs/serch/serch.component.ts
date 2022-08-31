import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-serch',
  templateUrl: './serch.component.html',
  styleUrls: ['./serch.component.css']
})
export class SerchComponent {

  @ViewChild('txtSearch') txtSearch!:ElementRef<HTMLInputElement>;

  constructor(private gifsService: GifsService) {}

  search() {
    const value = this.txtSearch.nativeElement.value;
    if ( value.trim().length === 0 ) {return}
    this.gifsService.searchGifs(value);
    this.txtSearch.nativeElement.value = "";
  }

}
