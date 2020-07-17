function find(num,callback){
  for(i=0;i<num.length;i++){
    x= callback(num[i]);
    if(x==true){
      break;
    }
    
  }
  console.log(num[i]); 
 // return x;
}


function isEven(num){
    return (num%2 ==0);
    
}

console.log(isEven(3));
console.log(isEven(4));
console.log(find([1,3,5,4,2],isEven));