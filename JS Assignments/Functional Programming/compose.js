

   const compose =(f1,f2)=>(value)=>f1(f2(value))

   function double(x){
     return x*2;
   }

   function square(x){
     return x*x;
   }

   var f1= compose(square,double);
   var f2= compose(double,square);
   console.log(f1(5));
   console.log(f1(10));
   console.log(f2(5));
   console.log(f2(10));

