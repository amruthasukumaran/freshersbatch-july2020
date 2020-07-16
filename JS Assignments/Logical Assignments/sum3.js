function choice(){
var num= prompt("Enter a number.");
var ch = prompt("Choose operation  : 1. Sum  2. Product")

    var sum=0;
    var product=1;

    if(ch==1){
        for(var i=1; i<=num; i++){
            sum=sum+i;
            
        }
        console.log(sum);

    }
    else if(ch==2){
        for(var i=1; i<=num; i++){
            product=product*i;
            

    }
    console.log(product);

} else{
    console.log("Wrong choice!!!!");
}
}
choice();