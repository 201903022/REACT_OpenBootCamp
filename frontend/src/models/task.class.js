import { Levels } from "./leveles.enum";
export class Task { 
    id = 0;
    name = '';
    description = ''; 
    status = false; 
    level = Levels.NORMAL; 

    constructor(id,name, description,status,level) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.status = status;
        this.level = level;
    }
    
}