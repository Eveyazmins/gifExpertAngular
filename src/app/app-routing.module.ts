import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AddCategoryComponent } from './components/add-category/add-category.component';
import { GifSearchComponent } from './components/gif-search/gif-search.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'search/:word', component: GifSearchComponent },
  { path: 'add', component: AddCategoryComponent },
  { path: '**', redirectTo:'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
 export class AppRoutingModule { }
