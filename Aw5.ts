//Procedural Oriented Programming(POP)

function Factor(No:number):void{
    
    var i=0;
   var temp=0;
  var t1=0;
  var t2=1;
  temp=t1+t2;
 for(i=3;i<=No/2;i++){
    t1=t2;
    t2=temp;
     temp=t1+t2;
      console.log(t1);
      
    } 
}
var Value1:number=21;
Factor(Value1);


