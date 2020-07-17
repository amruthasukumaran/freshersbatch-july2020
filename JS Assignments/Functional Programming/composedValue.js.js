

   const composedValue  =(f1,f2)=>(value)=>f1(f2(value))

   function double(x){
     return x*2;
   }

   function square(x){
     return x*x;
   }

   const getResult= composedValue(square,double);
   console.log(getResult(5));




  
     

 /* function composedValue(callback1,callback,x){
          callback1(x);
          callback(x);
          
          }
      function double(x){
          return x*2;
        
   }
   function square(x){
         let a=double(x);
       
       console.log(a*a);
   }*/

//composedValue(square,double,5);
