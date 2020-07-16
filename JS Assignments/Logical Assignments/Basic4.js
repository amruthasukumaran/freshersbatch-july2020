function flipCoin(n) {
  
    var heads = 0, tails = 0;
    for(var i = 0; i < n; i++) {
  
        if(Math.random() < 0.50) {
            heads++;
        } else {
            tails++;
        }
  }
         headsRatio(heads,n);
  }
  
  function numHeads(){
    var num = Number(prompt("How many times do you want to flip the coin?"));
    flipCoin(num);
  }
  numHeads();
   
function headsRatio(head,total){
 var ratio= (head/total);
 console.log(+ratio);

}  