const map = (a)=>(value)=>a(value)

function square(x){
      return x*x;
}
function sqrt(x){
    return Math.sqrt(x);
}


var getResult=map(square);

console.log(getResult(9));