/*function isEven(x){
  while((x%2)==0){
      return "true";
  }
  return "false";
}*/



function isEven(x){

    var check=["true","false"];
    return (check[x%2]);
}


console.log(isEven(345673));