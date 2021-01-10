import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//Http
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
//Toaster Y anomations library
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListCharactersComponent } from './components/list-characters/list-characters.component';
import { CharacterComponent } from './components/character/character.component';
import { SearchCharacterComponent } from './components/search-character/search-character.component';

@NgModule({
  declarations: [
    AppComponent,
    ListCharactersComponent,
    CharacterComponent,
    SearchCharacterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
