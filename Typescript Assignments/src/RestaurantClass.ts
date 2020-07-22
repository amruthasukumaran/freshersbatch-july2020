import { IRestaurant } from "./RestaurantInterface";

export class Restaurant implements IRestaurant{
     
    restaurant(){
        console.log("You are on the restaurant page....!!!!")
    }
}