import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  /**El componente cards va a recibir datos de otro componente para cargar las tarjetas. 
   * El dato a recibir va a ser un array de gifs */
  @Input() items: any[] = [];

  constructor() {}

  ngOnInit(): void {
  }

}
