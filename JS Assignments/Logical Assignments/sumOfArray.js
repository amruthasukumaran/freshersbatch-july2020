
let list=[1,2,3,4,5,6,7,8,9];
function sum1(){
    var sum=0;
    for(var i=0;i<list.length;i++){
         sum=sum+list[i];  
    }
    console.log(sum);
}
function sum2(){
var j=0;
var sum=0;
while(j<list.length){
     sum=sum+list[j];
}
console.log(sum);
}
sum1();
sum2();