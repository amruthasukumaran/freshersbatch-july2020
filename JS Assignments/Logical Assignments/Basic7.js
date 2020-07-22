function goodDay(){
    var i= Math.random();
console.log(i);
if(i<0.5){
   document.getElementById("good").innerHTML="HAVE A GOOD DAY!!!!!";// console.log("HAVE A GOOD DAY!!!!!");
}
else{
    document.getElementById("bad").innerHTML="HAVE A BAD DAY!!!!";
}
}
goodDay();