import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  search:string;
  search_flag: boolean;
  searchInput: string;
  

  constructor(private _router: Router) {
    this.search_flag = false;
  }

  ngOnInit(): void {
  }

  cleanSearch(){
   
    this.searchInput = '';
    this._router.navigateByUrl('/home');
  }

  onSubmit( form: NgForm){

    console.log(this.searchInput);
    this._router.navigate(['search/', this.searchInput]);
    
  }


}
