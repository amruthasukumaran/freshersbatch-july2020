import { IMenu } from "./MenuInterface";

export class Menu implements IMenu{
    
    menu(){
        console.log("You are on the Menu page");
    }
}