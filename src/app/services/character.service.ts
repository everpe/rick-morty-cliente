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



  //probando passportLaravel
  public user(): Observable<any> {
    return this.httpClient.get<Character>('http://localhost:8000/api/user',{
      headers: {
        'Authorization': 'Bearer ' + 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIzIiwianRpIjoiODIxZTVkYTkwMWY0MjEwNmY2ZGM0ZTQxNmJiM2E5ZTE5ZWQ5YzQyMjI0MmFlZDRhYTg5OTQzNWEyZTExYTM3YjEzYWQ4Yzc5NGRhYTlkODQiLCJpYXQiOjE2MTEwOTIwMTUsIm5iZiI6MTYxMTA5MjAxNSwiZXhwIjoxNjQyNjI4MDE1LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.DUJwx3vM9-FCQr-u_O6osHPwi7jGXIT_Rwz64wFPpNu0lFEqz0Ea1G7KE5vZjS6ni8gX3yhQVvscmkrpIQfUuqgmYNzCZKj6D8DrL9api3XbUgVx3UsHU3TiXMZptcDTE5Ul1DmffS-hnmxsSLY8PAofqpEXfl51nHEcakrYTkncCPAgmqgSKBv7GYM5ssxeG7fHV88OKXIozFs1tTWRUwv-AA9oci4xgJC-e_oOblCFt4mLl_I_tyiIjEtDP5MPf6gZ-bTK57ej3iarZ6Xfu4F0AY6XhpOh5J5JS3k2XAiLosDhkxABTiBUBkxfdn1TD43UdFaUhN2ji2JczgEjUM42fVahYiE55v4xJ7KYdeytP7Xrku9M_EE_YSjtRBJtRfqyQb_p5MzR_aZZUMqEANRQoVPpJx5KD82vzUJpODBaqIpdasS16EuJDuUwBQ41fEDRGdQ1XFgJcp02djpQc4VO82WtIB_h6WcyMf3ijNxPPTNBPf5smI8OKstb1IZwyuS1rNMXNEmrv_eZD-PMU5EoFP7A260rOd_fh79RfOqGUTxJ2Lhqgq72cDkVzSyS4U4SEJTCnSGBjydG0EJ8m_8fkiGmQf6Z3hKHBHag91vP4teHLpjuFTtupG2Lef4OiBYeHUb6x1oXUZHBE70paePu-a7-6pVi6B1LzpRajX4'
      }
    });
  }

}
