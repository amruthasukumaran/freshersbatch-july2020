import { Admin } from "./AdminClass";
import { Menu } from "./MenuClass";
import { Restaurant } from "./RestaurantClass";
import { User } from "./UserClass";


let r = new Admin();
r.admin();

let c = new Menu();
c.menu();

let a = new Restaurant();
a.restaurant();

let b = new User();
b.user();