var fourNums=new Array(4);
   
for(var i=0;i<fourNums.length;i++){
    fourNums[i]=Math.random();
}
console.log(fourNums);
var a= fourNums[3];
for(var j=fourNums.length-1; j>0; j--){
    fourNums[j]=fourNums[j-1];
}
fourNums[0]=a;

console.log(fourNums);
