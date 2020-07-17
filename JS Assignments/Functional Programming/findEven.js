const find =(a)=> (value)=> a(value)

function isEven(num){
    return (num%2 ==0);
}
arr=[1,3,5,4,2];
var getResult=find(isEven);
//const getElem= arr.find(isEven);

console.log(getResult(3));
console.log(getResult(4));
console.log(getResult(43));
console.log(arr.find(isEven));