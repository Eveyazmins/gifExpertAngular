import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class GiphyService {

  private apiKey = 'UprUq6f3HWyBvwwdhdTM85DFZ800xVp3';
  private cat_list = [];



  constructor( private _http: HttpClient ) { 
  }
  
  getTrending(){
    return this._http.get(`https://api.giphy.com/v1/gifs/trending?api_key=${this.apiKey}&limit=20`);
  }

  getSearch( value:string ){
    console.log(value);
    return this._http.get(`https://api.giphy.com/v1/gifs/search?api_key=${this.apiKey}&q=${value}&limit=20`);
  }

  getCategories(){
    return this.cat_list;
  }

  setCategories(newcategories:string[]){

    this.cat_list = newcategories;
    console.log(this.cat_list);

  }

}
