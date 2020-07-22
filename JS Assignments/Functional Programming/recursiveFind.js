
function find(num,callback){
    callback(num);

    if(isEven(num.slice(0,1))==true){
        console.log(num.slice(0,1));
        
        
    }else{
      num.shift();
      find(num,callback);
    }
       
   
  }
 
  function isEven(num){
      return (num%2 ==0);
      
  }
  
  console.log(isEven(3));
  console.log(isEven(4));
 find([1,3,5,4,2],isEven);