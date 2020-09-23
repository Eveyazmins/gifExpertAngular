import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AddCategoryComponent } from './components/add-category/add-category.component';
import { GifListComponent } from './components/gif-list/gif-list.component';
import { GifListItemComponent } from './components/gif-list-item/gif-list-item.component';
import { HomeComponent } from './components/home/home.component';
import { LoadingComponent } from './components/loading/loading.component';
import { GifSearchComponent } from './components/gif-search/gif-search.component';
import { CardsComponent } from './components/cards/cards.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AddCategoryComponent,
    GifListComponent,
    GifListItemComponent,
    HomeComponent,
    LoadingComponent,
    GifSearchComponent,
    CardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
