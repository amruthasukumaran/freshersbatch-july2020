function map(arr,callback){
var ans=[];
    for(i=0;i<arr.length;i++){
        x=callback(arr[i]);
        ans.push(x);
    }
    
    return ans;
}

function square(x){
      return x*x;
}
function sqrt(x){
    return Math.sqrt(x);
}

console.log(map([1,2,3,4,5],square));
console.log(map([1,4,9,16,25],sqrt));