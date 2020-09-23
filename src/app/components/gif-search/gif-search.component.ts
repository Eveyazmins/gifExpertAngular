import { Component, OnInit, Input } from '@angular/core';
import { GiphyService } from '../../services/giphy.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-gif-search',
  templateUrl: './gif-search.component.html',
  styleUrls: ['./gif-search.component.css']
})
export class GifSearchComponent implements OnInit {

  loading: boolean;
  gifs_search: any[] = [];
  busqueda: string = "";
  error: boolean;
  


  constructor( private _giphy: GiphyService, private _activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {

    this.changeOfRoute();
  }

  changeOfRoute(){
    this.loading = true;
    this.error = false;
    
    this._activatedRoute.params.subscribe(params=>{
      this.busqueda=params['word'];

      this._giphy.getSearch( params['word'] ).subscribe( (data:any) =>{
        this.gifs_search = data.data;
        this.loading = false;
        console.log(this.gifs_search);
        
      }, (errorServicio) =>{
        console.log(errorServicio);
        this.loading = false;
        this.error = true;
        console.log(errorServicio);
        //this.mensajeError = errorServicio.error.error.message;
      });

    });


  }

}
