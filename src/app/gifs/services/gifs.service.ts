import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchGifsResponse } from '../interfaces/gifs.interface';



@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private _searchingHistory: string[] = [];
  private apiKey: string = "SKHBnOjl8Cv0JdQ7SyMIKwJdT94fjqu0";
  private serviceURL: string = "http://api.giphy.com/v1/gifs"

  public results: Gif[] =[];

  get searchingHistory():string[] {
    
    return [...this._searchingHistory];
  }

  constructor( private http: HttpClient ) {

    this._searchingHistory = JSON.parse( localStorage.getItem('searchingHistory')! ) || [];
    this.results = JSON.parse( localStorage.getItem('results')! ) || [];

    // if (localStorage.getItem('searchingHistory') ) {
    //   this._searchingHistory = JSON.parse( localStorage.getItem('searchingHistory')! );
    // }
  }

  searchGifs (query: string) {
    query = query.trim().toLowerCase();
    // if ( query.trim().length === 0 ) {return}
    if( !this._searchingHistory.includes( query ) ) {
      this._searchingHistory.unshift( query );
      this._searchingHistory = this._searchingHistory.splice(0,10);
      localStorage.setItem( 'searchingHistory', JSON.stringify( this._searchingHistory ) );
    }

    const params = new HttpParams()
    .set('apiKey', this.apiKey)
    .set('limit', '20')
    .set('q', query);

    this.http.get<SearchGifsResponse>(`${ this.serviceURL }/search`, { params } )
      .subscribe( ( resp ) => { 
        console.log( resp.data );
        this.results = resp.data;
        localStorage.setItem( 'results', JSON.stringify( this.results ) );
      })
    console.log(this._searchingHistory);
  }

}
