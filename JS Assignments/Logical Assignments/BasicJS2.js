var hundredNums=new Array(100);
for(var i=0;i<hundredNums.length;i++){
    hundredNums[i]=Math.random();
}
console.log(hundredNums);

var a= hundredNums[99];
var b= hundredNums[98];
for(var j=hundredNums.length-1;j>0;j--){
    hundredNums[j]=hundredNums[j-2];
}
hundredNums[0]=b;
hundredNums[1]=a;

console.log(hundredNums);

