import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListCharactersComponent} from './components/list-characters/list-characters.component';
import {CharacterComponent} from './components/character/character.component';
import {SearchCharacterComponent} from './components/search-character/search-character.component';


const routes: Routes = [

  {path: 'list', component: ListCharactersComponent},
  {path: 'view/character', component: CharacterComponent},
  {path: 'search/character', component: SearchCharacterComponent},
  { path: '',   redirectTo: '/list', pathMatch: 'full' }
  // {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], 
  exports: [RouterModule]
})
export class AppRoutingModule { }