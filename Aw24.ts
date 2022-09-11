//Procedural Oriented Programming(POP)

function Factor(No:number):void{
    
    var num;
   var temp=0;
   var Td=0;
   var res=1;
   var rem;
   var pow;
   var i;
 
  temp=num;
  while(num>0){
      num=num/10;
      Td++;
  }
  num =temp;
   while(num>0){
rem=num%10;
pow=1;
i=0;
while(i<Td){
    pow=pow*rem;
    i++;
}
res=res+pow;
num=num/10;
   }
     if(res==temp){
    console.log("Armstrong Number");
     }
    else{
        console.log("Not Armstrong Number");
  }
     }
var Value1:number=153;
Factor(Value1);


