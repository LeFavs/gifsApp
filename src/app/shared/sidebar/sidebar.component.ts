import { Component } from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gifs.service';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  get searchingHistory() {
    return this.gifsService.searchingHistory;
  }

  constructor( private gifsService: GifsService ) {}
  
  search( item: string ){
    console.log(item);
    this.gifsService.searchGifs( item );
  }
  

}
