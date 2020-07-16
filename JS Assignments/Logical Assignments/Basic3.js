function flipCoin(n) {
  
  var heads = 0, tails = 0;
  for(var i = 0; i < n; i++) {

      if(Math.random() < 0.50) {
          heads++;
      } else {
          tails++;
      }
}
console.log(+heads);
}

function numHeads(){
  var num = Number(prompt("How many times do you want to flip the coin?"));
  flipCoin(num);
}
numHeads();
 
