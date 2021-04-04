import { Component, OnInit } from '@angular/core';
import {CharacterService} from '../../services/character.service';
import {Character} from '../../models/Character';
import { ActivatedRoute, Router } from '@angular/router';
import { Origin } from 'src/app/models/Origin';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-list-characters',
  templateUrl: './list-characters.component.html',
  styleUrls: ['./list-characters.component.css']
})
export class ListCharactersComponent implements OnInit {

  constructor(private characterService:CharacterService,
    private router: Router,private toastr: ToastrService) {
    this.listarPersonajes();
   }
   nameSearch="";
   results:Character[]=[];

  ngOnInit(): void {
    
  }

  public listarPersonajes(){
    
    this.characterService.listCharacters().subscribe((response:any) =>
      {
        this.results = response.results;
        this.characterService.user().subscribe(
          response=>{
            console.log(response);
          },
          error=>{
            console.log(error);
          }
        );
        console.log(response.results);
      },
      error=>{
        console.log(error);
      }
    );
  }


  searchCharacter(){
    // console.log("name:::"+this.nameSearch);
    
    this.nameSearch=this.nameSearch.replace(' ','&');
    this.results=[];
    this.characterService.findCharacterByName(this.nameSearch).subscribe((response:any)=>
    {
      console.log(response.results);
      this.results=response.results;
    },
    error=>{
      
      this.toastr.error('', 'No se encontró ese Personaje', {
        timeOut: 3000,
      });
      this.listarPersonajes();
      console.log(error);
    }
    );
    this.nameSearch='';
    // this.results[0]= new Character(-1,"Rickinillo",true,"https://rickandmortyapi.com/api/character/avatar/5.jpeg" ,"quizaaa","de allaa",new Origin("",""));
  }


  
 
}
