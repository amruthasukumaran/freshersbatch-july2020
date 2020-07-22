
function max(x, y, z) 
{
 maximum = 0;
 if (x > y)
 {
   maximum = x;
 } else
 {
   maximum = y;
 }
 if (z > maximum) 
 {
   maximum = z;
 }
 return maximum;
}

max(1,5,3);
console.log(+maximum );