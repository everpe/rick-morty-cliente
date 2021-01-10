import { Injectable } from '@angular/core';
import { HttpClient,HttpEvent, HttpRequest,HttpHeaders,HttpResponse,HttpParams   } from '@angular/common/http';
import { Observable } from 'rxjs';
// import { Observable } from 'rxjs/Observable';
import {Character} from '../models/Character';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root' 
})
export class CharacterService {
  apiURL = 'https://rickandmortyapi.com/api/character/';  

  constructor(private httpClient: HttpClient) { }

  // Lista 20 Personajes de RickMorty : Observable<Character[]>
  listCharacters() {
    return this.httpClient.get<Character[]>(this.apiURL + `?count=20`).pipe(
      map((results: Character[])=>{
        return results;
      })
    ) 
  }


  /**
   * Obtiene un personaje por su Id
   * @param id
   */
  public findCharacterById(id:number): Observable<Character> {
    return this.httpClient.get<Character>(this.apiURL+ `${id}`);
  }


  /**
   * Encuentra Varios por nombre
   * @param name 
   */
   findCharacterByName(name:string) {
    console.log("se envia"+this.apiURL+ `?name=`+ `${name}`)
    return this.httpClient.get<Character[]>(this.apiURL+ `?name=${name}`).pipe(
      map((results: Character[])=>{
        return results;
      })
    ) 
    //  `${name}`);
  }


}
