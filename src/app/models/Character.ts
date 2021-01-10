import {Origin} from './Origin';
export class Character {

    id:number;
    name:string;
    status:boolean
    image?:string;
    species:string;
    gender:string;
    origin:Origin;

    constructor(id:number,name:string,status:boolean,image:string,species:string,
        gender:string,origin:Origin) 
    {
        this.id=id;
        this.name=name;
        this.status=status;
        this.image=image;
        this.species=species;
        this.gender=gender;
        this.origin=origin;
    }
}