import { Component, OnInit } from '@angular/core';
import { GiphyService } from '../../services/giphy.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  gifs_trending: any[] = [];
  loading: boolean;
  error: boolean;

  constructor( private _giphy: GiphyService, private _activatedRoute: ActivatedRoute) {

    this.loading = true;
    this.error = false;

    this._giphy.getTrending().subscribe( (data:any) =>{
      this.gifs_trending = data.data;
      this.loading = false;
      console.log(this.gifs_trending);
    }, (errorServicio) =>{
      console.log(errorServicio);
      this.loading = false;
      this.error = true;
      console.log(errorServicio);
      //this.mensajeError = errorServicio.error.error.message;
    });
    
  }

  ngOnInit(): void {

  }


}
