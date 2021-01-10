import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Origin } from 'src/app/models/Origin';
import {Character} from '../../models/Character';
import {CharacterService} from '../../services/character.service';
@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {

  public character: Character= new Character(-1,"",false,"","","",new Origin("",""));

  constructor(private route: ActivatedRoute,private characterService:CharacterService) { 
    this.setParameterRouterLink();
  }

  ngOnInit(): void {
  }


  /**
   * Parametro de Url (id del Character)
   */
  setParameterRouterLink():void{
    //Para darle el tipo de pqr que viene derouterLink 
    this.route.queryParams.subscribe(params => { 
        this.character.id = params.id;
        console.log(this.character.id);
        this.setCharacter(this.character.id);
      });
  }

  setCharacter(id:number){
    this.characterService.findCharacterById(id).subscribe(
      response=>{
        console.log(response);
        this.character=response;
      },
      error=>{
        console.log(error);
      }
    );
  }


}
