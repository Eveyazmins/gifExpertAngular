import { Component, OnInit, Input } from '@angular/core';
import { GiphyService } from 'src/app/services/giphy.service';

@Component({
  selector: 'app-gif-list',
  templateUrl: './gif-list.component.html',
  styleUrls: ['./gif-list.component.css']
})
export class GifListComponent implements OnInit {

  @Input() estollegadelpadre: string[]; //any

  categ_list = [''];
  gifs_list: any[] = [];
  loading: boolean;
  error: boolean;
 

  constructor( private giphy: GiphyService ) { 
    
  }

  ngOnInit(): void {}

  getGifsByCategory(){

    this.categ_list = this.estollegadelpadre;
    this.gifs_list = [];
    this.loading = true;
    this.error = false;
  
    this.categ_list.forEach(category => {

      this.giphy.getSearch(category).subscribe( (data: any ) =>{
        console.log(data.data);
        
        this.gifs_list.push(data.data);
  
        this.loading = false;
        console.log(this.gifs_list);

      }, 
      (errorServicio) =>{
        console.log(errorServicio);
        this.loading = false;
        this.error = true;
        console.log(errorServicio);
        //this.mensajeError = errorServicio.error.error.message;
      });
      
    });
   
    
  }

 
  

}
