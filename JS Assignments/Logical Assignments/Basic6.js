
function rollDie(){
var i;
var count=0;
while(i!=5){
       i= Math.floor(Math.random() * 6);
       console.log(i);
    count++;
}

console.log("count= "+count);
}

rollDie();