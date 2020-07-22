
class Rectangle{

    constructor(width,height){
         this.width=width;
         this.height=height;
    }
    
}
Rectangle.prototype.getArea=function(){
    this.height;
    this.width;
console.log (this.height*this.width);
}
let rec1= new Rectangle(3,4);
let rec2= new Rectangle(9,10);

console.log(rec1.height);
console.log(rec2.height);
rec1.getArea();
rec2.getArea();


let r =new Rectangle(4,5);
r.height=50;
r.getArea();
