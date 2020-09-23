import { Component, OnInit, ElementRef, ViewChild, Input, Output } from '@angular/core';
import { GiphyService } from '../../services/giphy.service';
import { ThrowStmt } from '@angular/compiler';
import { GifListComponent } from '../gif-list/gif-list.component';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {

  @ViewChild('datosDesdeElPadre', { static: false })
  datosDesdeElPadre: GifListComponent;
  categ_list: string[];
  newCategory: string;
  //categ_list = [''];

  constructor( private giphy: GiphyService) { 
    this.categ_list = this.giphy.getCategories();
  }

  ngOnInit(): void {
  }

  addCategory(){

    this.categ_list.push(this.newCategory);
    this.giphy.setCategories(this.categ_list);
    this.datosDesdeElPadre.estollegadelpadre = this.categ_list;
    this.datosDesdeElPadre.getGifsByCategory();
  }

}
