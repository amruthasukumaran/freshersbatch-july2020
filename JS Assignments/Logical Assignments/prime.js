function prime()
{
    var num= prompt("Enter a number.");
    var flag=0;
  if (num==1)
  {
    console.log("Not a prime number!!!");
  }
  else if(num == 2)
  {
    console.log("Prime number!!!");
  }else {

    for(var i=2; i <= num/2; i++)
		{
			if(num%i == 0)
			{
				flag = 1;
				break;
			}
        }
        if(flag==0){
            console.log("Prime Number");
        }else{
            console.log("Not a prime number!!!");
        }
  }
  
}
prime();