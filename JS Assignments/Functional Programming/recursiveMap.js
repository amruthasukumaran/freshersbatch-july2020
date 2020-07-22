
var result=[];
function map(arr,callback){
   
    
     if(arr.length === 1){
          return callback(arr);
     }
     else{
         return [callback(arr[0])].concat(map(arr.slice(1),callback));

     }
    }
    
    function square(x){
          return x*x;
    }
    function sqrt(x){
        return Math.sqrt(x);
    }
    
    console.log(map([1,2,3,4,5],square));
    console.log(map([1,4,9,16,25],sqrt));